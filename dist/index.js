'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_sdk_1 = __importDefault(require("@line/bot-sdk"));
const lineUtils_1 = require("./utils/lineUtils");
exports.lineClient = new bot_sdk_1.default.Client({
    channelAccessToken: process.env.ACCESSTOKEN
});
exports.handler = function (event, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = JSON.parse(event.body);
        if (body.events[0].replyToken === '00000000000000000000000000000000') { //接続確認エラー回避
            context.succeed({
                statusCode: 200,
                headers: { "X-Line-Status": "OK" },
                body: '{"result":"connect check"}'
            });
        }
        else {
            const text = body.events[0].message.text;
            yield lineUtils_1.sendMessage(text, body.events[0].replyToken);
            context.succeed({
                statusCode: 200,
                headers: { "X-Line-Status": "OK" },
                body: '{"result":"completed"}'
            });
        }
    });
};
//# sourceMappingURL=index.js.map