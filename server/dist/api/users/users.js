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
function handler(req, res) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return __awaiter(this, void 0, void 0, function* () {
        (0, dbConfig_1.default)();
        const { method } = req;
        switch (method) {
            case 'GET':
                const users = yield User_1.default.find();
                res.status(200).json({ success: true, message: users });
                break;
            case 'PUT':
                var { id } = req.body;
                if (!id)
                    return res.status(401).json({ success: false, message: "Unauthorised: ID required" });
                var user = yield User_1.default.findOne({ _id: id }).exec();
                if (!user)
                    return res.status(404).json({ success: false, message: "User doesn't exist" });
                if ((_a = req.body) === null || _a === void 0 ? void 0 : _a.first_name)
                    user.first_name = (_b = req.body) === null || _b === void 0 ? void 0 : _b.first_name;
                if ((_c = req.body) === null || _c === void 0 ? void 0 : _c.last_name)
                    user.last_name = (_d = req.body) === null || _d === void 0 ? void 0 : _d.last_name;
                if ((_e = req.body) === null || _e === void 0 ? void 0 : _e.username)
                    user.username = (_f = req.body) === null || _f === void 0 ? void 0 : _f.username;
                if ((_g = req.body) === null || _g === void 0 ? void 0 : _g.contact)
                    user.contact = (_h = req.body) === null || _h === void 0 ? void 0 : _h.contact;
                if ((_j = req.body) === null || _j === void 0 ? void 0 : _j.location)
                    user.location = (_k = req.body) === null || _k === void 0 ? void 0 : _k.location;
                const result = yield user.save();
                res.status(200).json({ success: true, user: result });
                break;
            case 'DELETE':
                var { id } = req.body;
                if (!id)
                    return res.status(401).json({ success: false, message: "Unauthorised: ID required" });
                var user = yield User_1.default.findOne({ _id: id }).exec();
                if (!user)
                    return res.status(404).json({ success: false, message: "User doesn't exist" });
                yield user.deleteOne();
                res.status(200).json({ success: true, message: "User was successfully deleted" });
                break;
            default:
                res.sendHeader("Allow", ['GET', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    });
}
exports.default = handler;
