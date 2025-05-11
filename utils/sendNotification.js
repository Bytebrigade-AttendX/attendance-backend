// sendNotification.js
import admin from "./firebase.js";

export const sendPushNotification = async (
  fcmTokens,
  title,
  body,
  data = {}
) => {
  for (const token of fcmTokens) {
    const message = {
      notification: {
        title: title,
        body: body,
      },
      data: data,
      android: {
        priority: "high",
        notification: {
          sound: "default",
        },
      },
      apns: {
        payload: {
          aps: {
            sound: "default",
          },
        },
        headers: {
          "apns-priority": "10",
        },
      },
      token,
    };

    try {
      const response = await admin.messaging().send(message);
      console.log(`Sent to ${token}: ${response}`);
    } catch (error) {
      console.error(`Failed for ${token}:`, error);
    }
  }
};
