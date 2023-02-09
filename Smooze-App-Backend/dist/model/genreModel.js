"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreInstance = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class genreInstance extends sequelize_1.Model {
}
exports.genreInstance = genreInstance;
genreInstance.init({
    genre_id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db_1.db,
    tableName: "genre"
});
//# sourceMappingURL=genreModel.js.map