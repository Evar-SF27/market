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
const dbConfig_1 = __importDefault(require("@/config/dbConfig"));
const User_1 = __importDefault(require("@/server/model/User"));
const cookies_1 = __importDefault(require("cookies"));
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, dbConfig_1.default)();
        const { method } = req;
        if (method !== 'GET')
            return res.status(405).json({ success: false, message: "Method not supported" });
        const cookies = new cookies_1.default(req, res);
        const refreshToken = cookies.get('refresh-token');
        const user = yield User_1.default.findOne({ refreshToken }).exec();
        if (!user) {
            cookies.set('refresh-token', '', {
                httpOnly: true,
                sameSite: true,
                // secure: true, 
                maxAge: 0
            });
        }
        user.refreshToken = "";
        yield user.save();
        cookies.set('refresh-token', '', {
            httpOnly: true,
            sameSite: true,
            // secure: true, 
            maxAge: 0
        });
        res.status(200).json({ success: true });
    });
}
exports.default = handler;
