"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const convert = __importStar(require("xml-js"));
const bibleIndex_1 = require("./bibleIndex");
exports.getVerseIdn = ({ keyword, chapter, verse }) => __awaiter(this, void 0, void 0, function* () {
    try {
        const bibleIndex = bibleIndex_1.getBibleIndex(keyword);
        const book = bibleIndex.bookId;
        const index = `${bibleIndex.keyword} ${chapter}:${verse}`;
        const res = yield axios_1.default.get(`https://alkitab.sabda.org/api/verse.php?book=${book}&chapter=${chapter}&verse=${verse}&type=def`);
        const base = JSON.parse(convert.xml2json(res.data)).elements[0].elements;
        // const books = base.filter(element => element.name === 'book')[0].elements[0].text
        // const bookId = base.filter(element => element.name === 'book_id')[0].elements[0].text
        // const chapter = base.filter(element => element.name === 'chapter')[0].elements[0].text
        // const verse = base.filter(element => element.name === 'verse')[0].elements[0].text
        // const verseCount = base.filter(element => element.name === 'verse_count')[0].elements[0].text
        const texts = base
            .filter(element => element.name === 'texts')[0].elements
            .filter(element => element.name === 'tb')[0].elements
            .filter(element => element.name === 'text')[0].elements[0].text;
        return { index, content: texts };
    }
    catch (e) {
        console.error(e);
    }
});
//# sourceMappingURL=bibleIdnUtils.js.map