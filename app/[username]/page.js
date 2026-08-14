"use server";

import Connectdb from "@/lib/Connectdb";
import { PaymentPage } from "../components/PaymentPage";
import User from "@/models/user";
import { notFound } from "next/navigation";

const Username = async ({ params }) => {
  const { username } = await params;

  const checkUser = async (username) => {
    await Connectdb();

    const u = await User.findOne({ username });

    if (!u) {
      return notFound();
    }
  };

  await checkUser(username);

  return <PaymentPage value={username} />;
};

export default Username;