"use server"
import Payment from "@/models/Payment";
import Connectdb from "@/lib/Connectdb";
import Razorpay from "razorpay";
import User from "@/models/user";

export const initiate = async (amount, to_user, Form) => {
    console.log("Payment Form raw:", Form);
    await Connectdb();
    let use = await User.findOne({ username: to_user });
    
    // Use creator's Razorpay credentials from DB if present, otherwise fallback to .env credentials
    const key_id = (use?.razorpayId && use.razorpayId.trim()) || process.env.NEXT_PUBLIC_KEY_ID;
    const key_secret = (use?.razorpaySecret && use.razorpaySecret.trim()) || process.env.KEY_SECRET;

    if (!key_id || !key_secret) {
        throw new Error("Razorpay Key ID or Key Secret is missing. Please update your profile with valid Razorpay credentials.");
    }

    const instance = new Razorpay({
        key_id: key_id,
        key_secret: key_secret
    });

    // Handle both plain JS object and FormData
    const name = Form instanceof FormData ? Form.get("name") : Form?.name;
    const message = Form instanceof FormData ? Form.get("message") : Form?.message;

    let options = {
        amount: Number.parseInt(amount) * 100, // Amount in paise
        currency: "INR",
    };

    let order = await instance.orders.create(options);

    console.log("Before Payment.create:", {
        name,
        to_user,
        oid: order.id,
        amount,
        message
    });

    // Save to DB and assign to variable
    const newPayment = await Payment.create({
        name: name,
        to_user: to_user,
        oid: order.id,
        amount: amount,
        message: message
    });

    console.log("Created payment document:", newPayment);
    console.log("Saved message:", newPayment.message);

    return order;
};

export const fetchuser = async (username) => {
    await Connectdb()
    let x = await User.findOne({ username: username })
    if(!x) return null;

    // Convert Mongoose document to a plain JS object for React
    return JSON.parse(JSON.stringify(x));
}

export const fetchpayment = async () => {
  await Connectdb();
  let p = await Payment.find({done:true}).sort({ amount: -1 }).limit(10).lean();
  
  // Convert all ObjectId and Date fields into plain JSON strings
  return JSON.parse(JSON.stringify(p));
};

export const updateProfile = async (data, oldusername) => {
    await Connectdb();

    // 1. Handle FormData vs Plain JS Object
    let ndata = data instanceof FormData ? Object.fromEntries(data) : { ...data };
    console.log(ndata)

    // 2. Remove _id so MongoDB update doesn't crash
    delete ndata._id;

    // 3. If username is being updated, check if the new username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username });
        if (u) {
            return { error: "Username already exists" };
        }
    }

    // 4. Update the user in DB
    await User.updateOne({ email: ndata.email }, ndata);

    return { success: true };
}