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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return __awaiter(this, void 0, void 0, function* () {
        (0, dbConfig_1.default)();
        const { method } = req;
        switch (method) {
            case 'GET':
                var { id, slug } = req.body;
                if (id) {
                    const stores = yield Store_1.default.findOne({ _id: id }).exec();
                    res.status(200).json({ success: true, message: stores });
                    break;
                }
                else if (slug) {
                    const stores = yield Store_1.default.find({ slug });
                    res.status(200).json({ success: true, message: stores });
                    break;
                }
                else {
                    const stores = yield Store_1.default.find();
                    res.status(200).json({ success: true, message: stores });
                    break;
                }
            case 'PUT':
                var { id } = req.body;
                if (!id)
                    return res.status(401).json({ success: false, message: "Unauthorised: ID required" });
                var store = yield Store_1.default.findOne({ _id: id }).exec();
                if (!store)
                    return res.status(404).json({ success: false, message: "Store doesn't exist" });
                if ((_a = req.body) === null || _a === void 0 ? void 0 : _a.store_name)
                    store.store_name = (_b = req.body) === null || _b === void 0 ? void 0 : _b.store_name;
                if ((_c = req.body) === null || _c === void 0 ? void 0 : _c.slug)
                    store.slug = (_d = req.body) === null || _d === void 0 ? void 0 : _d.slug;
                if ((_e = req.body) === null || _e === void 0 ? void 0 : _e.location)
                    store.location = (_f = req.body) === null || _f === void 0 ? void 0 : _f.location;
                if ((_g = req.body) === null || _g === void 0 ? void 0 : _g.description)
                    store.description = (_h = req.body) === null || _h === void 0 ? void 0 : _h.description;
                if ((_j = req.body) === null || _j === void 0 ? void 0 : _j.contact)
                    store.contact = (_k = req.body) === null || _k === void 0 ? void 0 : _k.contact;
                if ((_l = req.body) === null || _l === void 0 ? void 0 : _l.photo_url)
                    store.photo_url = (_m = req.body) === null || _m === void 0 ? void 0 : _m.photo_url;
                const result = yield store.save();
                res.status(200).json({ success: true, store: result });
                break;
            case 'DELETE':
                var { id } = req.body;
                if (!id)
                    return res.status(401).json({ success: false, message: "Unauthorised: ID required" });
                var store = yield Store_1.default.findOne({ _id: id }).exec();
                if (!store)
                    return res.status(404).json({ success: false, message: "Store doesn't exist" });
                yield store.deleteOne();
                res.status(200).json({ success: true, message: "Store was successfully deleted" });
                break;
            default:
                res.sendHeader("Allow", ['GET', 'POST', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    });
}
exports.default = handler;
