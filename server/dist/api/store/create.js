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
const Store_1 = __importDefault(require("@/server/model/Store"));
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, dbConfig_1.default)();
        try {
            const { store_name, slug, user, location, description, contact } = req.body;
            if (!store_name || !slug || !user || !location || !description || !contact)
                return res.status(401).json({ success: false, message: "Incomplete credentials" });
            const store = yield Store_1.default.findOne({ slug }).exec();
            if (store)
                return res.status(409).json({ success: false, message: "Store already exists" });
            yield Store_1.default.create({
                "store_name": store_name,
                "slug": slug,
                "user": user,
                "location": location,
                "description": description,
                "contact": contact
            });
            res.status(201).json({ success: true, message: `New Store ${store_name} created successfully!` });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: error.message });
        }
    });
}
exports.default = handler;
