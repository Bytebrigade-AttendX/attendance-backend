import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const PORT = 3000;
const HOST = app.get("host"); // 👈 Get from app settings
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});