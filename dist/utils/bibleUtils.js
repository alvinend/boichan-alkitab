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
exports.analyseText = (str) => {
    // Keyword
    const splittedStr = str.split(' ');
    if (splittedStr.length < 2) {
        throw 'Invalid String';
    }
    let colonIndex = 0;
    splittedStr.some((x, i) => {
        if (x.includes(':')) {
            colonIndex = i;
            return true;
        }
        return false;
    });
    if (!colonIndex) {
        throw 'Invalid String';
    }
    const keyword = splittedStr.slice(0, colonIndex).join('');
    const chapter = splittedStr[colonIndex].split(':')[0];
    const verse = splittedStr[colonIndex].split(':')[1];
    return {
        keyword,
        chapter,
        verse
    };
};
//# sourceMappingURL=bibleUtils.js.map