"use strict";
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webApp = void 0;
const v2_1 = require("firebase-functions/v2");
// Set the maximum instances to 10 for all functions
(0, v2_1.setGlobalOptions)({ maxInstances: 10 });
const https_1 = require("firebase-functions/v2/https");
const middleware_1 = require("./middleware");
const SearchRoutes_1 = __importDefault(require("./routes/SearchRoutes"));
const ArtistRoutes_1 = __importDefault(require("./routes/ArtistRoutes"));
const utils_1 = require("./utils");
const types_1 = require("./types");
const express = require("express");
const cors = require("cors");
// const PORT = 5000;
const app = express();
// Use the cors middleware
const allowedOrigins = ["http://localhost:3000", "https://music-app-a57cf.web.app"];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/search", SearchRoutes_1.default);
app.use("/api/artist", ArtistRoutes_1.default);
app.get("/", (req, res) => {
    res.send(`App is running on port`);
});
app.all("*", (req, res, next) => {
    next(new utils_1.ApiResponse(`Can't find ${req.originalUrl} on the server`, types_1.HTTP_RESPONSE_CODES.NOT_FOUND));
});
app.use(middleware_1.globalErrorHandler);
// app.listen(PORT, () => {
//     console.log(`Start listening on port ${PORT} `);
// });
exports.webApp = (0, https_1.onRequest)(app);
