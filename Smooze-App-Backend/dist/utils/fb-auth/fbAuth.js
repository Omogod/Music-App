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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fboauthBackend = void 0;
const uuid_1 = require("uuid");
const model_1 = require("../../model");
const auth_utils_1 = require("../auth-utils");
const passport_1 = __importDefault(require("passport"));
const passport_facebook_1 = __importDefault(require("passport-facebook"));
const FacebookStrategy = passport_facebook_1.default.Strategy;
const express_session_1 = __importDefault(require("express-session"));
const config_1 = __importDefault(require("../../config"));
const fboauthBackend = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.use((0, express_session_1.default)({
        secret: config_1.default.SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    passport_1.default.serializeUser(function (user, cb) {
        cb(null, user);
    });
    passport_1.default.deserializeUser(function (obj, cb) {
        cb(null, obj);
    });
    passport_1.default.use(new FacebookStrategy({
        clientID: config_1.default.FACEBOOK_CLIENT_ID,
        clientSecret: config_1.default.FACEBOOK_CLIENT_SECRET,
        callbackURL: config_1.default.CALL_BACK_kURL,
        authorizationURL: "https://www.facebook.com/v10.0/dialog/oauth",
        tokenURL: "https://graph.facebook.com/v10.0/oauth/access_token",
        profileFields: [
            "id",
            "displayName",
            "email",
            "gender",
            "picture.type(large)",
        ],
    }, function (accessToken, refreshToken, profile, done) {
        return __awaiter(this, void 0, void 0, function* () {
            profile.accessToken = accessToken;
            done(null, profile);
        });
    }));
    app.get("/facebook", passport_1.default.authenticate("facebook"));
    app.get("/facebook/auth/:secrets", passport_1.default.authenticate("facebook", {
        successRedirect: "/facebook/profile",
        scope: ["email", "public_profile"],
        failureRedirect: "/failed",
    }));
    app.get("/failed", (req, res) => {
        res.send("YOUR FAILED LOGIN !!!");
        //
    });
    app.get("/facebook/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { accessToken, email, displayName, id, gender, photos } = req.user;
            let userName = displayName.split(" ")[0];
            const user = (yield model_1.UserInstance.findOne({
                where: {
                    facebookId: id,
                },
            }));
            if (!user) {
                const uuiduser = (0, uuid_1.v4)();
                const salt = yield (0, auth_utils_1.GenerateSalt)();
                const userPassword = yield (0, auth_utils_1.GeneratePassword)(userName, salt);
                //check if user already exists using key value pairs in the object
                const newUser = (yield model_1.UserInstance.create({
                    id: uuiduser,
                    email: email || `${id}@gmail.com`,
                    userName,
                    password: userPassword,
                    salt,
                    verified: true,
                    facebookId: id,
                    profileImage: photos[0].value,
                    faceBookToken: accessToken,
                    gender,
                    is_premium: false,
                }));
                if (newUser) {
                    const token = yield (0, auth_utils_1.GenerateSignature)({
                        id: newUser.id,
                        email: newUser.email,
                        verified: newUser.verified,
                        isLoggedIn: true,
                    });
                    return res.redirect(`${config_1.default.FRONTEND_BASE_URL}/auth/social/?token=${token}`);
                }
                else {
                    return res.redirect(`${config_1.default.FRONTEND_BASE_URL}/auth/social/?token=error`);
                }
            }
            else {
                const token = yield (0, auth_utils_1.GenerateSignature)({
                    id: user.id,
                    email: user.email,
                    verified: user.verified,
                    isLoggedIn: true,
                });
                return res.redirect(`${config_1.default.FRONTEND_BASE_URL}/auth/social/?token=${token}`);
            }
        }
        catch (error) {
            console.log(error);
            return res.redirect(`${config_1.default.FRONTEND_BASE_URL}/auth/social/?token=error`);
        }
    }));
});
exports.fboauthBackend = fboauthBackend;
//# sourceMappingURL=fbAuth.js.map