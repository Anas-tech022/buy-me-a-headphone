import mongoose from 'mongoose';
import {Schema, model, models} from 'mongoose';
import { stringifyCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import Razorpay from 'razorpay';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name:{type:String},
  username: { type: String, required: true },
  coverPicture: { type: String },
  profilePicture: { type: String },
  razorpayId:{type: String},
  razorpaySecret:{type: String},
  createdAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now }
});

const User = models.User || model('User', userSchema);

export default User;
