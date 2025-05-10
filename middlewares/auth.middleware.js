import jwt from "jsonwebtoken";
import prisma from "../db/db.config.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      return res
        .status(404)
        .json({ message: "Unauthorized request- no token provided" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res
        .status(400)
        .json({ message: "Unauthorized request - wrong token provided" });
    }
    // const user = await User.findById(decodedToken.userId).select("-password");
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    // req.user = user;

    // next();

    //Implementation pending
  } catch (error) {
    console.log("Error in protectRoute middleware ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
