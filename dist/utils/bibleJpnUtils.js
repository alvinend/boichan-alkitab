"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Perjanjian Lama
const genesis = __importStar(require("../db/jp/gen.json"));
const exodus = __importStar(require("../db/jp/exod.json"));
const leviticus = __importStar(require("../db/jp/lev.json"));
const numbers = __importStar(require("../db/jp/num.json"));
const deuteronomy = __importStar(require("../db/jp/deut.json"));
const joshua = __importStar(require("../db/jp/josh.json"));
const judges = __importStar(require("../db/jp/judg.json"));
const ruth = __importStar(require("../db/jp/ruth.json"));
const first_samuel = __importStar(require("../db/jp/1sam.json"));
const second_samuel = __importStar(require("../db/jp/2sam.json"));
const first_king = __importStar(require("../db/jp/1kgs.json"));
const second_king = __importStar(require("../db/jp/2kgs.json"));
const first_chronicles = __importStar(require("../db/jp/1chr.json"));
const second_chronicles = __importStar(require("../db/jp/2chr.json"));
const ezra = __importStar(require("../db/jp/ezra.json"));
const nehemiah = __importStar(require("../db/jp/neh.json"));
const esther = __importStar(require("../db/jp/esth.json"));
const job = __importStar(require("../db/jp/job.json"));
const psalms = __importStar(require("../db/jp/ps.json"));
const proverbs = __importStar(require("../db/jp/prov.json"));
const ecclesiastes = __importStar(require("../db/jp/eccl.json"));
const song_of_songs = __importStar(require("../db/jp/song.json"));
const isaiah = __importStar(require("../db/jp/isa.json"));
const jeremiah = __importStar(require("../db/jp/jer.json"));
const lamentations = __importStar(require("../db/jp/lam.json"));
const ezekiel = __importStar(require("../db/jp/ezek.json"));
const daniel = __importStar(require("../db/jp/dan.json"));
const hosea = __importStar(require("../db/jp/hos.json"));
const joel = __importStar(require("../db/jp/joel.json"));
const amos = __importStar(require("../db/jp/amos.json"));
const obadiah = __importStar(require("../db/jp/obad.json"));
const jonah = __importStar(require("../db/jp/jonah.json"));
const micah = __importStar(require("../db/jp/mic.json"));
const nahum = __importStar(require("../db/jp/nah.json"));
const habakkuk = __importStar(require("../db/jp/hab.json"));
const zephaniah = __importStar(require("../db/jp/zeph.json"));
const haggai = __importStar(require("../db/jp/hag.json"));
const zechariah = __importStar(require("../db/jp/zech.json"));
const malachi = __importStar(require("../db/jp/mal.json"));
// Perjanjian baru
const matthew = __importStar(require("../db/jp/matt.json"));
const mark = __importStar(require("../db/jp/mark.json"));
const luke = __importStar(require("../db/jp/luke.json"));
const john = __importStar(require("../db/jp/john.json"));
const acts = __importStar(require("../db/jp/acts.json"));
const romans = __importStar(require("../db/jp/rom.json"));
const first_corinthians = __importStar(require("../db/jp/1cor.json"));
const second_corinthians = __importStar(require("../db/jp/2cor.json"));
const galatians = __importStar(require("../db/jp/gal.json"));
const ephesians = __importStar(require("../db/jp/eph.json"));
const philippians = __importStar(require("../db/jp/phil.json"));
const collosians = __importStar(require("../db/jp/col.json"));
const first_tessalonians = __importStar(require("../db/jp/1thess.json"));
const second_tessalonians = __importStar(require("../db/jp/2thess.json"));
const first_timothy = __importStar(require("../db/jp/1tim.json"));
const second_timothy = __importStar(require("../db/jp/2tim.json"));
const titus = __importStar(require("../db/jp/titus.json"));
const philemon = __importStar(require("../db/jp/phlm.json"));
const hebrews = __importStar(require("../db/jp/heb.json"));
const james = __importStar(require("../db/jp/jas.json"));
const first_peter = __importStar(require("../db/jp/1pet.json"));
const second_peter = __importStar(require("../db/jp/2pet.json"));
const first_john = __importStar(require("../db/jp/1john.json"));
const second_john = __importStar(require("../db/jp/2john.json"));
const third_john = __importStar(require("../db/jp/3john.json"));
const jude = __importStar(require("../db/jp/jude.json"));
const revelation = __importStar(require("../db/jp/rev.json"));
const bibleIndex_1 = require("./bibleIndex");
exports.getVerseJpn = ({ keyword, chapter, verse }) => {
    const bibleIndex = bibleIndex_1.getBibleIndex(keyword);
    const bookTitle = bibleIndex.keyword;
    const contentText = (object) => {
        try {
            console.log(`${bibleIndex.dict_key}.${chapter}.${verse}`);
            return Object
                .values(object)
                .filter(data => data.key === `${bibleIndex.dict_key}.${chapter}.${verse}`)[0]
                .text;
        }
        catch (_a) {
            throw '見つからない';
        }
    };
    const index = `${bibleIndex.jp} ${chapter}:${verse}`;
    let content = '';
    switch (bookTitle) {
        case 'Kejadian':
            content = contentText(genesis);
            break;
        case 'Keluaran':
            content = contentText(exodus);
            break;
        case 'Imamat':
            content = contentText(leviticus);
            break;
        case 'Bilangan':
            content = contentText(numbers);
            break;
        case 'Ulangan':
            content = contentText(deuteronomy);
            break;
        case 'Yosua':
            content = contentText(joshua);
            break;
        case 'Hakim-Hakim':
            content = contentText(judges);
            break;
        case 'Rut':
            content = contentText(ruth);
            break;
        case '1 Samuel':
            content = contentText(first_samuel);
            break;
        case '2 Samuel':
            content = contentText(second_samuel);
            break;
        case '1 Raja-Raja':
            content = contentText(first_king);
            break;
        case '2 Raja-Raja':
            content = contentText(second_king);
            break;
        case '1 Tawarikh':
            content = contentText(first_chronicles);
            break;
        case '2 Tawarikh':
            content = contentText(second_chronicles);
            break;
        case 'Ezra':
            content = contentText(ezra);
            break;
        case 'Nehemia':
            content = contentText(nehemiah);
            break;
        case 'Ester':
            content = contentText(esther);
            break;
        case 'Ayub':
            content = contentText(job);
            break;
        case 'Mazmur':
            content = contentText(psalms);
            break;
        case 'Amsal':
            content = contentText(proverbs);
            break;
        case 'Pengkhotbah':
            content = contentText(ecclesiastes);
            break;
        case 'Kidung Agung':
            content = contentText(song_of_songs);
            break;
        case 'Yesaya':
            content = contentText(isaiah);
            break;
        case 'Yeremia':
            content = contentText(jeremiah);
            break;
        case 'Ratapan':
            content = contentText(lamentations);
            break;
        case 'Yehezkiel':
            content = contentText(ezekiel);
            break;
        case 'Daniel':
            content = contentText(daniel);
            break;
        case 'Hosea':
            content = contentText(hosea);
            break;
        case 'Yoel':
            content = contentText(joel);
            break;
        case 'Amos':
            content = contentText(amos);
            break;
        case 'Obaja':
            content = contentText(obadiah);
            break;
        case 'Yunus':
            content = contentText(jonah);
            break;
        case 'Mikha':
            content = contentText(micah);
            break;
        case 'Nahum':
            content = contentText(nahum);
            break;
        case 'Habakuk':
            content = contentText(habakkuk);
            break;
        case 'Zefanya':
            content = contentText(zephaniah);
            break;
        case 'Hagai':
            content = contentText(haggai);
            break;
        case 'Zakharia':
            content = contentText(zechariah);
            break;
        case 'Maleakhi':
            content = contentText(malachi);
            break;
        // Perjanjian Baru
        case 'Matius':
            content = contentText(matthew);
            break;
        case 'Markus':
            content = contentText(mark);
            break;
        case 'Lukas':
            content = contentText(luke);
            break;
        case 'Yohanes':
            content = contentText(john);
            break;
        case 'Kisah Para Rasul':
            content = contentText(acts);
            break;
        case 'Roma':
            content = contentText(romans);
            break;
        case '1 Korintus':
            content = contentText(first_corinthians);
            break;
        case '2 Korintus':
            content = contentText(second_corinthians);
            break;
        case 'Galatia':
            content = contentText(galatians);
            break;
        case 'Efesus':
            content = contentText(ephesians);
            break;
        case 'Filipi':
            content = contentText(philippians);
            break;
        case 'Kolose':
            content = contentText(collosians);
            break;
        case '1 Tesalonika':
            content = contentText(first_tessalonians);
            break;
        case '2 Tesalonika':
            content = contentText(second_tessalonians);
            break;
        case '1 Timotius':
            content = contentText(first_timothy);
            break;
        case '2 Timotius':
            content = contentText(second_timothy);
            break;
        case 'Titus':
            content = contentText(titus);
            break;
        case 'Filemon':
            content = contentText(philemon);
            break;
        case 'Ibrani':
            content = contentText(hebrews);
            break;
        case 'Yakobus':
            content = contentText(james);
            break;
        case '1 Petrus':
            content = contentText(first_peter);
            break;
        case '2 Petrus':
            content = contentText(second_peter);
            break;
        case '1 Yohanes':
            content = contentText(first_john);
            break;
        case '2 Yohanes':
            content = contentText(second_john);
            break;
        case '3 Yohanes':
            content = contentText(third_john);
            break;
        case 'Yudas':
            content = contentText(jude);
            break;
        case 'Wahyu':
            content = contentText(revelation);
            break;
        default:
            throw '見つからない';
    }
    return { index, content };
};
//# sourceMappingURL=bibleJpnUtils.js.map