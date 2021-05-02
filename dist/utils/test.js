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
const bibleUtils_1 = require("./bibleUtils");
const test = (str) => __awaiter(this, void 0, void 0, function* () {
    const analysedData = bibleUtils_1.analyseText(str);
    const res = yield bibleUtils_1.getVerses(analysedData);
    console.log(res);
});
test('kis 1:1 aasdasdadasdasd');
//# sourceMappingURL=test.js.map