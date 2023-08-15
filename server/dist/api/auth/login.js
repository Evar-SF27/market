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
const User_1 = __importDefault(require("@/server/model/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookies_1 = __importDefault(require("cookies"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConfig_1 = __importDefault(require("@/config/dbConfig"));
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        (0, dbConfig_1.default)();
        const { method } = req;
        const ACCESS_KEY = process.env.JWT_ACCESS_SECRET_KEY;
        const REFRESH_KEY = process.env.JWT_REFRESH_SECRET_KEY;
        if (method !== 'POST')
            return res.status(405).json({ success: false, message: "Method not supported" });
        try {
            const { email, password } = req.body;
            if (!email || !password)
                return res.status(401).json({ success: false, message: "Incomplete credentials" });
            const user = yield User_1.default.findOne({ email }).exec();
            if (!user)
                return res.status(404).json({ success: false, message: "User not found" });
            const matchPassword = yield bcrypt_1.default.compare(password, user.password);
            if (!matchPassword)
                return res.status(401).json({ success: false, message: "Unauthorised" });
            const payload = { "userId": user._id };
            const accessToken = jsonwebtoken_1.default.sign(payload, ACCESS_KEY, { expiresIn: '60s' });
            const refreshToken = jsonwebtoken_1.default.sign(payload, REFRESH_KEY, { expiresIn: '1d' });
            user.refreshToken = refreshToken;
            yield user.save();
            const cookies = new cookies_1.default(req, res);
            cookies.set('refresh-token', refreshToken, {
                httpOnly: true,
                sameSite: true,
                // secure: true, 
                maxAge: 24 * 60 * 60 * 1000
            });
            res.status(200).json({ success: true, user: user, accessToken: accessToken });
        }
        catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    });
}
exports.default = handler;
