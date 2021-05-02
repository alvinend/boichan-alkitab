require('dotenv').config()

import * as line from '@line/bot-sdk'
import { analyseText, getVerses } from './utils/bibleUtils';
import { sendMessage } from './utils/lineUtils';
import { sendLog } from './utils/slackUtils';
export const lineClient = new line.Client({
  channelAccessToken: process.env.ACCESSTOKEN
})

exports.handler = async function (event, context) {
  const startRequestTime = new Date()
  const body = JSON.parse(event.body);
  if (body.events[0].replyToken === '00000000000000000000000000000000') { //接続確認エラー回避
    context.succeed({
      statusCode: 200,
      headers: { "X-Line-Status" : "OK"},
      body: '{"result":"connect check"}'
    })
  } else {
    const text = body.events[0].message.text as string
    try {
      const replyToken = body.events[0].replyToken

      const analysedData = analyseText(text)

      const verses = await getVerses(analysedData)

      await sendMessage(verses, replyToken)
      const messageSentTime = new Date()

      await sendLog(
        '```\n' +
        '---------------- \n' +
        'Text \n' +
        '---------------- \n' +
        `${text} \n` +
        '---------------- \n' +
        `Response (${messageSentTime.getTime() - startRequestTime.getTime()})ms \n` +
        '---------------- \n' +
        `${verses} \n` +
        '---------------- \n' +
        '```\n'
      )      
    } catch(e) {
      await sendLog(
        '```\n' +
        '---------------- \n' +
        'Text \n' +
        '---------------- \n' +
        `${text} \n` +
        '---------------- \n' +
        'Error \n' +
        '---------------- \n' +
        `${e} \n` +
        '---------------- \n' +
        '```\n'
      )   
    }

    context.succeed({
      statusCode: 200,
      headers: { "X-Line-Status" : "OK"},
      body: '{"result":"completed"}'
    })
  }
}