import axios from "axios"

const hookUrl = 'https://hooks.slack.com/services/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'

export const sendLog = async (str: string) => {
  try {
    await axios.post(
      hookUrl,
      {
        'text': str
      }
    )
  } catch(e) {
    console.error(e)
  }
}