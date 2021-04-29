import { lineClient } from '../index'

export const sendMessage = async (msg, replayToken) => {
  try {
    await lineClient.replyMessage(
      replayToken,
      {
        'type': 'text',
        'text': msg
      }
    )
  } catch (error) {
    console.error(error)
  }
}
