/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import { NextFunction, Request, Response } from "express";
import { globalErrorHandler } from "./middleware";
import SearchRoutes from "./routes/SearchRoutes";
import ArtistRoutes from "./routes/ArtistRoutes";
import { ApiResponse } from "./utils";
import { HTTP_RESPONSE_CODES } from "./types";

import express = require("express");
import cors = require("cors");

const PORT = 5000;
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

export const webApp = onRequest(app);
