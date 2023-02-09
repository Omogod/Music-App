"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicRouter = void 0;
const express_1 = __importDefault(require("express"));
const musicHandler_1 = require("../handlers/musicHandler/musicHandler");
const auth_1 = require("../middleware/auth/auth");
const multer_1 = require("../utils/multer/multer");
exports.musicRouter = express_1.default.Router();
/**
 * @swagger
 * /api/music:
 *   get:
 *     description: Testing for get api
 *     responses:
 *       200:
 *         description: Returns hello music
 */
exports.musicRouter
    .get("/get_song", auth_1.auth, musicHandler_1.getAllMusic)
    .post("/create", () => { })
    .post("/prem_create", multer_1.musicUpload.single("song"), auth_1.auth, musicHandler_1.premium_create)
    .put("/update/:id", () => { })
    .delete("/delete/:id", () => { });
//# sourceMappingURL=music.js.map