"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistRoute = void 0;
const playlistHandler_1 = require("./../handlers/playlistHandler/playlistHandler");
const express_1 = require("express");
const auth_1 = require("../middleware/auth/auth");
exports.playlistRoute = (0, express_1.Router)();
/**
 * @swagger
 * /api/playlist:
 *   get:
 *     description: Testing for get api
 *     responses:
 *       200:
 *         description: Returns hello playlist
 */
exports.playlistRoute
    .get("/getPlaylists", auth_1.auth, playlistHandler_1.getPlaylistSongs)
    .post("/addToPlaylist/:songId", auth_1.auth, playlistHandler_1.addSongToPlaylist)
    .put("/update/:id", () => { })
    .delete("/delete/:id", () => { });
//# sourceMappingURL=playlist.js.map