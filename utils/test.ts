import { analyseText, getVerses } from "./bibleUtils"

const test = async (str) => {
  const analysedData = analyseText(str)

  const res = await getVerses(analysedData)

  console.log(res)
}

test('kis 1:1 aasdasdadasdasd')