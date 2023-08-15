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
const multer_1 = __importDefault(require("@/middlewares/multer"));
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, dbConfig_1.default)();
        var { method, image } = req;
        if (method != "POST")
            return res.status(400).json({ success: false, message: "Method is not allowed" });
        var uploadImage = multer_1.default.single("image");
        uploadImage(req, res, (err) => {
            if (err)
                return res.status(400).json({ success: false, message: err.message });
            res.status(200).json({ success: true, message: "req.file.filename" });
        });
    });
}
exports.default = handler;
