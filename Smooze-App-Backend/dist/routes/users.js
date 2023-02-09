"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoute = void 0;
const express_1 = __importDefault(require("express"));
const userHandler_1 = require("../handlers/userHandler");
const userHandler_2 = require("../handlers/userHandler/userHandler");
const auth_1 = require("../middleware/auth/auth");
const joi_validator_1 = require("../utils/joi-validator");
const schema_1 = require("../utils/joi-validator/schema");
const multer_1 = require("../utils/multer/multer");
exports.usersRoute = express_1.default.Router();
/**
 * @openapi
 * '/api/user/signup':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
exports.usersRoute.post("/signup", joi_validator_1.RegisterUserJoi, userHandler_1.Register);
/**
 * @openapi
 * '/api/user/signin':
 *  post:
 *     tags:
 *     - User
 *     summary: Log in a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateLoginInput'
 *     responses:
 *      200:
 *        description: Success
 */
exports.usersRoute.post("/signin", joi_validator_1.loginUserJoi, userHandler_1.signin);
/**
  * @openapi
  * '/api/user/update':
  *  patch:
  *     tags:
  *     - User
  *     summary: Log in a user
  *     requestBody:
  *      required: true
  *      content:
  *        application/json:
  *           schema:
  *              $ref: '#/components/schemas/UpdateUserInput'
  *     responses:
  *      200:
  *        description: Successful Update
  */
exports.usersRoute.patch("/update", multer_1.upload.single("profileImage"), auth_1.auth, userHandler_1.update);
exports.usersRoute.post("/resetpassword", schema_1.sendemailTokenJoi, userHandler_2.requestPassword);
exports.usersRoute.patch("/verify", userHandler_2.verifyUser);
exports.usersRoute.post("/changepassword", joi_validator_1.changePasswordJoi, userHandler_2.changepassword);
exports.usersRoute.get("/get-user", auth_1.auth, userHandler_1.getUser);
//# sourceMappingURL=users.js.map