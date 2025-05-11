// // firebase.js
// import admin from "firebase-admin";
// import { readFileSync } from "fs";
// import path from "path";

// // Load the service account key
// const serviceAccountPath = path.resolve(
//   "../fcmtestapp-37399-firebase-adminsdk-fbsvc-8135ca9edb.json"
// );

// admin.initializeApp({
//   credential: admin.credential.cert(
//     JSON.parse(readFileSync(serviceAccountPath, "utf8"))
//   ),
// });

// export default admin;

// fcmAdmin.js
import admin from "firebase-admin";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Polyfill __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load service account JSON
const serviceAccountPath = path.join(
  __dirname,
  "../fcmtestapp-37399-firebase-adminsdk-fbsvc-8135ca9edb.json"
);
const serviceAccount = JSON.parse(await readFile(serviceAccountPath, "utf-8"));

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
