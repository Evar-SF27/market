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
const Category_1 = __importDefault(require("@/server/model/Category"));
const dbConfig_1 = __importDefault(require("@/config/dbConfig"));
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, dbConfig_1.default)();
        const { method } = req;
        if (method !== 'GET')
            return res.status(405).json({ success: false, message: "Method not supported" });
        try {
            const categories = yield Category_1.default.find();
            if (!categories)
                return res.status(404).json({ success: false, message: "Categories not found" });
            res.status(200).json({ success: true, categories: categories });
        }
        catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    });
}
exports.default = handler;
