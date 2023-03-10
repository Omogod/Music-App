"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    GMAIL_PASS: process.env.PROD_GMAIL_PASS,
    GMAIL_USER: process.env.PROD_GMAIL_USER,
    FROM_ADMIN_EMAIL: process.env.PROD_FROM_ADMIN_EMAIL,
    userSubject: process.env.PROD_userSubject,
    port: process.env.PROD_PORT,
    BASE_URL: process.env.PROD_BASE_URL,
    FRONTEND_BASE_URL: process.env.PROD_FRONTEND_BASE_URL,
    DATABASE_URL: process.env.PROD_DATABASE_URL,
    APP_SECRETE: process.env.PROD_APP_SECRETE,
    JWT_SECRETE: process.env.PROD_JWT_SECRETE,
    DATABASE_USERNAME: process.env.PROD_DATABASE_USERNAME,
    DATABASE_HOST: process.env.PROD_DATABASE_HOST,
    DATABASE_DATABASE_NAME: process.env.PROD_DATABASE_DATABASE_NAME,
    DATABASE_PASSWORD: process.env.PROD_DATABASE_PASSWORD,
    DATABASE_PORT: process.env.PROD_DATABASE_PORT,
    GOOGLE_CLIENT_SECRET: process.env.PROD_GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.PROD_GOOGLE_CALLBACK_URL,
    GOOGLE_CLIENT_ID: process.env.PROD_GOOGLE_CLIENT_ID,
    FACEBOOK_CLIENT_ID: process.env.PROD_FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.PROD_FACEBOOK_CLIENT_SECRET,
    CALL_BACK_kURL: process.env.PROD_CALL_BACK_kURL,
    SESSION_SECRET: process.env.PROD_SESSION_SECRET,
    CLOUD_NAME: process.env.PRODL_CLOUD_NAME,
    CLOUD_API_KEY: process.env.PROD_CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.PROD_CLOUD_API_SECRET,
};
console.log("running PRODUCTION mode");
//# sourceMappingURL=prod.js.map