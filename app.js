import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

export default app;
