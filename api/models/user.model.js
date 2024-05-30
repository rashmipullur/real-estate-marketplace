import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  },
  { timestamps: true }
);

// userSchema.pre("save", async function (next) {
//   // only run this function if the passsword was actually modified

//   if (!this.isModified("password")) return next();

//   // hash the password with cost of 12
//   this.password = await bcryptjs.hash(this.password, 12);

//   next();
// });

const User = mongoose.model("User", userSchema);

export default User;
