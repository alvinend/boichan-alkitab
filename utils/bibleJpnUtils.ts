// Perjanjian Lama
import * as genesis from '../db/jp/gen.json'
import * as exodus from '../db/jp/exod.json'
import * as leviticus from '../db/jp/lev.json'
import * as numbers from '../db/jp/num.json'
import * as deuteronomy from '../db/jp/deut.json'
import * as joshua from '../db/jp/josh.json'
import * as judges from '../db/jp/judg.json'
import * as ruth from '../db/jp/ruth.json'
import * as first_samuel from '../db/jp/1sam.json'
import * as second_samuel from '../db/jp/2sam.json'
import * as first_king from '../db/jp/1kgs.json'
import * as second_king from '../db/jp/2kgs.json'
import * as first_chronicles from '../db/jp/1chr.json'
import * as second_chronicles from '../db/jp/2chr.json'
import * as ezra from '../db/jp/ezra.json'
import * as nehemiah from '../db/jp/neh.json'
import * as esther from '../db/jp/esth.json'
import * as job from '../db/jp/job.json'
import * as psalms from '../db/jp/ps.json'
import * as proverbs from '../db/jp/prov.json'
import * as ecclesiastes from '../db/jp/eccl.json'
import * as song_of_songs from '../db/jp/song.json'
import * as isaiah from '../db/jp/isa.json'
import * as jeremiah from '../db/jp/jer.json'
import * as lamentations from '../db/jp/lam.json'
import * as ezekiel from '../db/jp/ezek.json'
import * as daniel from '../db/jp/dan.json'
import * as hosea from '../db/jp/hos.json'
import * as joel from '../db/jp/joel.json'
import * as amos from '../db/jp/amos.json'
import * as obadiah from '../db/jp/obad.json'
import * as jonah from '../db/jp/jonah.json'
import * as micah from '../db/jp/mic.json'
import * as nahum from '../db/jp/nah.json'
import * as habakkuk from '../db/jp/hab.json'
import * as zephaniah from '../db/jp/zeph.json'
import * as haggai from '../db/jp/hag.json'
import * as zechariah from '../db/jp/zech.json'
import * as malachi from '../db/jp/mal.json'

// Perjanjian baru
import * as matthew from '../db/jp/matt.json'
import * as mark from '../db/jp/mark.json'
import * as luke from '../db/jp/luke.json'
import * as john from '../db/jp/john.json'
import * as acts from '../db/jp/acts.json'
import * as romans from '../db/jp/rom.json'
import * as first_corinthians from '../db/jp/1cor.json'
import * as second_corinthians from '../db/jp/2cor.json'
import * as galatians from '../db/jp/gal.json'
import * as ephesians from '../db/jp/eph.json'
import * as philippians from '../db/jp/phil.json'
import * as collosians from '../db/jp/col.json'
import * as first_tessalonians from '../db/jp/1thess.json'
import * as second_tessalonians from '../db/jp/2thess.json'
import * as first_timothy from '../db/jp/1tim.json'
import * as second_timothy from '../db/jp/2tim.json'
import * as titus from '../db/jp/titus.json'
import * as philemon from '../db/jp/phlm.json'
import * as hebrews from '../db/jp/heb.json'
import * as james from '../db/jp/jas.json'
import * as first_peter from '../db/jp/1pet.json'
import * as second_peter from '../db/jp/2pet.json'
import * as first_john from '../db/jp/1john.json'
import * as second_john from '../db/jp/2john.json'
import * as third_john from '../db/jp/3john.json'
import * as jude from '../db/jp/jude.json'
import * as revelation from '../db/jp/rev.json'

import { iGetVerse } from "./bibleUtils"
import { getBibleIndex } from "./bibleIndex";

export const getVerseJpn: iGetVerse = ({
  keyword,
  chapter,
  verse
}) => {
  const bibleIndex = getBibleIndex(keyword)
  const bookTitle = bibleIndex.keyword

  const contentText = (object: typeof genesis) => {
    try {
      console.log(`${bibleIndex.dict_key}.${chapter}.${verse}`)
      return Object
      .values(object)
      .filter(data => data.key === `${bibleIndex.dict_key}.${chapter}.${verse}`)[0]
      .text
    } catch {
      throw '見つからない'
    }
  }

  const index = `${bibleIndex.jp} ${chapter}:${verse}`
  let content = ''

  switch (bookTitle) {
    case 'Kejadian':
      content =  contentText(genesis)
      break

    case 'Keluaran':
      content = contentText(exodus)
      break
  
    case 'Imamat':
      content = contentText(leviticus)
      break

    case 'Bilangan':
      content = contentText(numbers)
      break

    case 'Ulangan':
      content = contentText(deuteronomy)
      break

    case 'Yosua':
      content = contentText(joshua)
      break

    case 'Hakim-Hakim':
      content = contentText(judges)
      break

    case 'Rut':
      content = contentText(ruth)
      break

    case '1 Samuel':
      content = contentText(first_samuel)
      break

    case '2 Samuel':
      content = contentText(second_samuel)
      break

    case '1 Raja-Raja':
      content = contentText(first_king)
      break

    case '2 Raja-Raja':
      content = contentText(second_king)
      break

    case '1 Tawarikh':
      content = contentText(first_chronicles)
      break

    case '2 Tawarikh':
      content = contentText(second_chronicles)
      break

    case 'Ezra':
      content = contentText(ezra)
      break

    case 'Nehemia':
      content = contentText(nehemiah)
      break

    case 'Ester':
      content = contentText(esther)
      break

    case 'Ayub':
      content = contentText(job)
      break

    case 'Mazmur':
      content = contentText(psalms)
      break

    case 'Amsal':
      content = contentText(proverbs)
      break

    case 'Pengkhotbah':
      content = contentText(ecclesiastes)
      break

    case 'Kidung Agung':
      content = contentText(song_of_songs)
      break

    case 'Yesaya':
      content = contentText(isaiah)
      break

    case 'Yeremia':
      content = contentText(jeremiah)
      break

    case 'Ratapan':
      content = contentText(lamentations)
      break

    case 'Yehezkiel':
      content = contentText(ezekiel)
      break

    case 'Daniel':
      content = contentText(daniel)
      break

    case 'Hosea':
      content = contentText(hosea)
      break

    case 'Yoel':
      content = contentText(joel)
      break

    case 'Amos':
      content = contentText(amos)
      break

    case 'Obaja':
      content = contentText(obadiah)
      break

    case 'Yunus':
      content = contentText(jonah)
      break

    case 'Mikha':
      content = contentText(micah)
      break

    case 'Nahum':
      content = contentText(nahum)
      break

    case 'Habakuk':
      content = contentText(habakkuk)
      break

    case 'Zefanya':
      content = contentText(zephaniah)
      break

    case 'Hagai':
      content = contentText(haggai)
      break

    case 'Zakharia':
      content = contentText(zechariah)
      break

    case 'Maleakhi':
      content = contentText(malachi)
      break

    // Perjanjian Baru
    case 'Matius':
      content = contentText(matthew)
      break

    case 'Markus':
      content = contentText(mark)
      break

    case 'Lukas':
      content = contentText(luke)
      break

    case 'Yohanes':
      content = contentText(john)
      break

    case 'Kisah Para Rasul':
      content = contentText(acts)
      break

    case 'Roma':
      content = contentText(romans)
      break

    case '1 Korintus':
      content = contentText(first_corinthians)
      break

    case '2 Korintus':
      content = contentText(second_corinthians)
      break

    case 'Galatia':
      content = contentText(galatians)
      break

    case 'Efesus':
      content = contentText(ephesians)
      break

    case 'Filipi':
      content = contentText(philippians)
      break

    case 'Kolose':
      content = contentText(collosians)
      break

    case '1 Tesalonika':
      content = contentText(first_tessalonians)
      break

    case '2 Tesalonika':
      content = contentText(second_tessalonians)
      break

    case '1 Timotius':
      content = contentText(first_timothy)
      break

    case '2 Timotius':
      content = contentText(second_timothy)
      break

    case 'Titus':
      content = contentText(titus)
      break

    case 'Filemon':
      content = contentText(philemon)
      break

    case 'Ibrani':
      content = contentText(hebrews)
      break

    case 'Yakobus':
      content = contentText(james)
      break

    case '1 Petrus':
      content = contentText(first_peter)
      break

    case '2 Petrus':
      content = contentText(second_peter)
      break

    case '1 Yohanes':
      content = contentText(first_john)
      break

    case '2 Yohanes':
      content = contentText(second_john)
      break

    case '3 Yohanes':
      content = contentText(third_john)
      break

    case 'Yudas':
      content = contentText(jude)
      break

    case 'Wahyu':
      content = contentText(revelation)
      break

    default:
      throw '見つからない'
  }

  return { index, content }
}


