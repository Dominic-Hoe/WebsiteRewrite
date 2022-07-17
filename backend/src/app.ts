import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import RootRouter from "./routes";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:8080",
            process.env.FRONTEND_URI,
        ],
    })
);

app.use("/", RootRouter);

export default function listen(port: number) {
    return new Promise<void>((resolve) => app.listen(port, resolve));
}
