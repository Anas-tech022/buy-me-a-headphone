import mongoose from "mongoose";
import {Schema, model, models} from "mongoose"

const PaymentSchema = new Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    amount: { type: Number, required: true },
    oid: { type: String, required: true },
    message: { type: String},
    createdAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
});

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);

// const Payment = models.Payment || model('Payment', PaymentSchema);

// export default Payment;
