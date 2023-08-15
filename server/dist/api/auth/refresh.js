"use strict";
"use server";
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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookies_1 = __importDefault(require("cookies"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConfig_1 = __importDefault(require("@/config/dbConfig"));
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        (0, dbConfig_1.default)();
        const ACCESS_KEY = process.env.JWT_ACCESS_SECRET_KEY;
        const REFRESH_KEY = process.env.JWT_REFRESH_SECRET_KEY;
        const { method } = req;
        if (method !== 'GET')
            return res.status(405).json({ success: false, message: "Method not supported" });
        const cookies = new cookies_1.default(req, res);
        const refreshToken = cookies.get('refresh-token');
        const user = yield User_1.default.findOne({ refreshToken }).exec();
        const genUser = user._id.valueOf();
        if (!user)
            return res.status(403);
        jsonwebtoken_1.default.verify(refreshToken, REFRESH_KEY, (err, decoded) => {
            if (err || genUser !== (decoded === null || decoded === void 0 ? void 0 : decoded.userId))
                return res.status(403).json({ success: false, message: "Unauthorized" });
            const accessToken = jsonwebtoken_1.default.sign({ userId: genUser }, ACCESS_KEY, { expiresIn: '30s' });
            res.json({ accessToken: accessToken });
        });
    });
}
exports.default = handler;
