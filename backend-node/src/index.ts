import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./middleware";
import SearchRoutes from "./routes/SearchRoutes";
import ArtistRoutes from "./routes/ArtistRoutes";
import { ApiResponse } from "./utils";
import { HTTP_RESPONSE_CODES } from "./types";

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

// Use the cors middleware

const allowedOrigins = ["http://localhost:3000"];

const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin as string) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/search", SearchRoutes);
app.use("/api/artist", ArtistRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send(`App is running on port ${PORT} `);
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new ApiResponse(`Can't find ${req.originalUrl} on the server`, HTTP_RESPONSE_CODES.NOT_FOUND));
});

app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`Start listening on port ${PORT} `);
});
