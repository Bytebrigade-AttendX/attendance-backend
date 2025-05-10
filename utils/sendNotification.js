// sendNotification.js
import admin from "./firebase.js";

export const sendPushNotification = async (
  fcmToken,
  title,
  body,
  data = {}
) => {
  const message = {
    token: fcmToken,
    notification: {
      title,
      body,
    },
    data, // optional custom data
    android: {
      priority: "high",
    },
    apns: {
      payload: {
        aps: {
          sound: "default",
        },
      },
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Successfully sent message:", response);
    return response;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
