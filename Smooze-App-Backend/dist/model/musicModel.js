"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicInstance = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class MusicInstance extends sequelize_1.Model {
}
exports.MusicInstance = MusicInstance;
MusicInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    songUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    artist: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    genre_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    album: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    song_duration: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: db_1.db,
    tableName: "music"
});
//# sourceMappingURL=musicModel.js.map