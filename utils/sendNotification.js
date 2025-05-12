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
      to:token,
      sound:"default",
      title:title,
      body:body,
      data: {...data,screen:'/student/home'}
    };

    try {
      await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-encoding": "gzip, deflate",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
  });
    } catch (error) {
      console.error(`Failed for ${token}:`, error);
    }
  }
};
