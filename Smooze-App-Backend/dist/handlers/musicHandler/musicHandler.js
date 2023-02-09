"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMusic = exports.premium_create = void 0;
const musicModel_1 = require("../../model/musicModel");
// import { v4 as UUID } from "uuid";
// import { MusicInstance } from "../../model/musicModel";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
const premium_create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const newSong = song({imageUrl:req.body.imageUrl,
    //                       songUrl: req.body.songUrl, 
    //                       artist: req.body.artist, 
    //                       genre: req.body.genre
    //                     })
    // const {imageUrl, songUrl} = req.body
    // {artist, genre}
    try {
        const song = req.file ? req.file.path : undefined;
        console.log(song);
        // const savedSong = await MusicInstance.create({imageUrl, songUrl, artist, genre})
        // res.status(200).send({song:savedSong})
    }
    catch (error) {
        res.status(400).send({ success: false, msg: "error" });
    }
});
exports.premium_create = premium_create;
const getAllMusic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const songs = yield musicModel_1.MusicInstance.findAll();
        res
            .status(201)
            .json({ songs, code: 201, message: "you have succesfully received all songs" });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllMusic = getAllMusic;
//# sourceMappingURL=musicHandler.js.map