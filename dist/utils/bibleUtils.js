"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bibleIdnUtils_1 = require("./bibleIdnUtils");
const bibleJpnUtils_1 = require("./bibleJpnUtils");
exports.getVerses = ({ keyword, chapter, verse }) => __awaiter(this, void 0, void 0, function* () {
    const values = yield Promise.all([
        bibleIdnUtils_1.getVerseIdn({ keyword, chapter, verse }),
        bibleJpnUtils_1.getVerseJpn({ keyword, chapter, verse })
    ]);
    return `(${values[0].index})\n` +
        `${values[0].content}\n` +
        `=====================\n` +
        `(${values[1].index})\n` +
        `${values[1].content}\n`;
});
//# sourceMappingURL=bibleUtils.js.map