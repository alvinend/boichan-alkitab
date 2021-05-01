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