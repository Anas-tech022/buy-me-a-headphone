# 🎧 Buy Me a Headphone

A modern, full-stack crowdfunding platform designed for developer . Fans and supporters can support the developer to buy a headphone  (micro-donations) to support their work!

![Deployment Status](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)
![Framework](https://img.shields.io/badge/Framework-Next.js-000000?style=for-the-badge&logo=nextdotjs)
![Database](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)
![Authentication](https://img.shields.io/badge/Auth-NextAuth.js-purple?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 📌 Project Overview

**Buy Me a Headphone** is a developer support platform built on top of **Next.js**, **NextAuth.js**, **MongoDB**, and **Tailwind CSS**. It allows users to register via GitHub OAuth, build a personalized your page, pay money and track all supporters in real-time.

---

## ✨ Features

- 🔐 **OAuth Authentication**: Instant one-click login via GitHub using `NextAuth.js`.
- 🎧 **"Buy a Headphone" Donations**: Supporters can select donation tiers or enter custom amounts with custom messages.
- 💾 **MongoDB Database Integration**: Automatic user profile creation and persistent transaction/supporter records with Mongoose schemas.
- 📊 **User Dashboard**: View total headphones received, recent transactions, and top supporters.
- 🎨 **Responsive & Sleek UI**: Built with Tailwind CSS, custom icons, and animated micro-interactions.
- ⚡ **Production Ready**: Fully prepped for serverless deployment on Vercel.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (GitHub Provider)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose ORM](https://mongoosejs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) or local MongoDB instance
- [GitHub Account](https://github.com) (for OAuth app setup)

---

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anas-tech022/buy-me-a-headphone.git
   cd buy-me-a-headphone
   ```
   2. **Install the dependencies:**
   ```bash
   npm install
   ```
   3. **Set up Environment Variables:**

Create a .env.local file in the root directory and add the following keys:
```bash
# NextAuth Settings
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key_here

# GitHub OAuth Credentials
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# MongoDB Connection String
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/buymeheadphone?retryWrites=true&w=majority
```

---

## 💻 Running Locally
Start the Next.js development server:

```bash
npm run dev
```
Open http://localhost:3000 in your browser.

---

## 📂 Project Structure

```text
buy-me-a-headphone/
├── actions/
│   └── useractions.js
├── app/
│   ├── [username]/
│   │   └── page.js
│   ├── about/
│   │   └── page.js
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.js
│   │   └── razorpay/
│   │       └── route.js
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── PaymentPage.js
│   │   └── SessionWrapper.js
│   ├── dashboard/
│   │   └── page.js
│   ├── login/
│   │   └── page.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── lib/
│   └── Connectdb.js
├── models/
│   ├── Payment.js
│   └── user.js
├── public/
│   ├── avatar.gif
│   ├── Background.gif
│   ├── profile picture.jpg
│   └── ...
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

## 🤝 Contributing

Contributions are welcome!

If you would like to contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## ⭐ Support

If you find buy-me-a-headphone useful or interesting, consider giving the repository a ⭐ on GitHub.