import prisma from "../db/db.config.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const storeFcm = async (req, res) => {
  const { token, fcmToken } = req.body;
  if (!token) {
    throw new ApiError(400, "Invalid login");
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  if (!decodedToken) {
    throw new ApiError(400, "Wrong token provided");
  }
  const userId = decodedToken.userId;

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      fcmToken: fcmToken,
    },
  });
  if (!user) {
    throw new ApiError(404, "User Not Found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Successfully updated the FCM token"));
};

export { storeFcm };
