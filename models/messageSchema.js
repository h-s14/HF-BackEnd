import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must contain at least 3 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must contain at least 3 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a vaild e-mail"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must be 10-Digits"],
    maxLength: [10, "Phone number must be 10-Digits"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message must contain atleast 10 characters"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
