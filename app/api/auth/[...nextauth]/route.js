import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/models/user";
import Connectdb from "@/lib/Connectdb";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        await Connectdb(); // Connect to the database
        // Check if the user already exists in the database
        const currentUser = await User.findOne({ email: profile.email });
        if (!currentUser) {
          // If the user doesn't exist, create a new user document
          const newUser = await User.create({
            email: profile.email,
            username: profile.email.split("@")[0], // Use the part before "@" as the username
          });
          await newUser.save();
          user.name = newUser.username; // Add the username to the session object
        }
        else {
          user.name = currentUser.username; // Add the current username to the session object
        }
        return true; // Allow sign-in
      }
    },
    async session({ session }) {
      if (session?.user?.email) {
        await Connectdb(); // Connect to database before querying
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.name = dbUser.username;
        }
      }
      return session;
    }
  }
})

export { handler as GET, handler as POST };