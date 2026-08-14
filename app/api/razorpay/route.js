import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Connectdb from "@/lib/Connectdb";
import Payment from "@/models/Payment";
import User from "@/models/user";

export const POST = async (req) => {
    await Connectdb()
    let body = await req.formData()
    body = Object.fromEntries(body)

    // Check if razorpayOrderId is present on Server
    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({ success: false, message: "Order Id not found" })

    }
    let user = await User.findOne({ username: p.to_user });
    const secret = (user?.razorpaySecret && user.razorpaySecret.trim()) || process.env.KEY_SECRET;

    //Verify the Payment
    let xx = validatePaymentVerification(
        { "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id },
        body.razorpay_signature,
        secret
    );

    if (xx) {
        //Verify the Payment
        let updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: true })
        return NextResponse.redirect(`http://localhost:3000/${updatedPayment.to_user}?paymentdone=true`)
    }
    else {
        return NextResponse.error("Payment Verification Failed")
    }
}

