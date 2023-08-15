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
const bcrypt_1 = __importDefault(require("bcrypt"));
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, dbConfig_1.default)();
        const { method } = req;
        if (method !== 'POST')
            return res.status(405).json({ success: false, message: "Method not supported" });
        try {
            const { username, email, password } = req.body;
            if (!username || !email || !password)
                return res.status(401).json({ success: false, message: "Incomplete credentials" });
            const user = yield User_1.default.findOne({ email }).exec();
            if (user)
                return res.status(409).json({ success: false, message: "User already exists" });
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            yield User_1.default.create({
                "username": username,
                "email": email,
                "password": hashedPassword
            });
            res.status(201).json({ 'success': true, message: `New User ${username} created successfully!` });
        }
        catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    });
}
exports.default = handler;
