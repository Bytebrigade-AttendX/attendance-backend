// firebase.js
import admin from "firebase-admin";
import { readFileSync } from "fs";
import path from "path";

// Load the service account key
const serviceAccountPath = path.resolve(
  "../pushify-bc6ec-firebase-adminsdk-fbsvc-7ba2302ff5.json"
);

admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(readFileSync(serviceAccountPath, "utf8"))
  ),
});

export default admin;
