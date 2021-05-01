import axios from 'axios'
import * as convert from 'xml-js'
import { getBibleIndex } from './bibleIndex'
import { iGetVerse } from './bibleUtils'

export const getVerseIdn: iGetVerse = async ({
  keyword,
  chapter,
  verse
}) => {
  try {
    const bibleIndex = getBibleIndex(keyword)
    const book = bibleIndex.bookId
    const index = `${bibleIndex.keyword} ${chapter}:${verse}`

    const res = await axios.get(`https://alkitab.sabda.org/api/verse.php?book=${book}&chapter=${chapter}&verse=${verse}&type=def`)

    const base = JSON.parse(convert.xml2json(res.data)).elements[0].elements
    
    // const books = base.filter(element => element.name === 'book')[0].elements[0].text
    // const bookId = base.filter(element => element.name === 'book_id')[0].elements[0].text
    // const chapter = base.filter(element => element.name === 'chapter')[0].elements[0].text
    // const verse = base.filter(element => element.name === 'verse')[0].elements[0].text
    // const verseCount = base.filter(element => element.name === 'verse_count')[0].elements[0].text
    const texts = base
      .filter(element => element.name === 'texts')[0].elements
      .filter(element => element.name === 'tb')[0].elements
      .filter(element => element.name === 'text')[0].elements[0].text

    return { index, content: texts as string }
  } catch (e) {
    console.error(e)
  }
}
