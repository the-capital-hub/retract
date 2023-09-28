import User from "../modals/user.modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (userData) => {
  try {
    const existingUser = await User.findOne({ email: userData.email });
    if (!existingUser) {
      const hashedPassword = bcrypt.hashSync(userData.password, 5);
      const newUser = new User({
        ...userData,
        password: hashedPassword,
      });
      await newUser.save();

      return {
        status: 200,
        message: "SignUp Successful",
        data: newUser,
      };
    } else {
      return {
        status: 200,
        message: "User already exists",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err,
    };
  }
};

export const signIn = async (email, password) => {
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return {
        status: 401,
        message: "User not found",
      };
    }
    const isPasswordValid = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordValid) {
      return {
        status: 401,
        message: "Invalid password",
      };
    }
    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    return {
      status: 200,
      message: "Successfully signed in",
      token: token,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err,
    };
  }
};

export const updateProfile = async (userId, updatedData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId,
      updatedData,
      { new: true }
    );

    if (!updatedUser) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    return {
      status: 200,
      message: "Profile updated successfully",
      data: updatedUser,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err,
    };
  }
}