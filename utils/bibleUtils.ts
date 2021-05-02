import { getVerseIdn } from "./bibleIdnUtils"
import { getVerseJpn } from "./bibleJpnUtils"

export type iGetVerse = (params: {
  keyword: string
  chapter: number
  verse: number
}) => Promise<{index: string, content: string}> | {index: string, content: string} 

export const getVerses = async ({ keyword, chapter, verse }) => {
  const values = await Promise.all([
    getVerseIdn({ keyword, chapter, verse }),
    getVerseJpn({ keyword, chapter, verse })
  ])

  return `(${values[0].index})\n` +
    `${values[0].content}\n` +
    `=====================\n` +
    `(${values[1].index})\n` +
    `${values[1].content}\n`
}

export const analyseText = (str: string) => {
  // Keyword
  const splittedStr = str.split(' ')

  if (splittedStr.length < 2) {
    throw 'Invalid String'
  }

  let colonIndex = 0

  splittedStr.some(
    (x, i) => {
      if (x.includes(':')) {
        colonIndex = i
        return true
      }
      return false
    }
  )

  if (!colonIndex) {
    throw 'Invalid String'
  }

  const keyword = splittedStr.slice(0, colonIndex).join('')
  const chapter = splittedStr[colonIndex].split(':')[0]
  const verse = splittedStr[colonIndex].split(':')[1]

  return {
    keyword,
    chapter,
    verse
  }

}