import { getVerses } from "./bibleUtils"

const test = async () => {
  const res = await getVerses({
    keyword: 'Wahyu',
    chapter: 2,
    verse: 2
  })

  console.log(res)
}

test()