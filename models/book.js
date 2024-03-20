import mongoose, { schema } from "mongoose";
const UserSchema = new schema(
  {
    name: String,
    price: Number,
    description: String,
    image: String,
    author: String,
  },
  {
    Timestamps: true,
  }
);
export const User = mongoose.model("users", UserSchema);
