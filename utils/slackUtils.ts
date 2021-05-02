import axios from "axios"

const hookUrl = process.env.SLACK_WEBHOOK
console.log('')

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