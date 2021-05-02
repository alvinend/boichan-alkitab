'use strict';
import * as line from '@line/bot-sdk'
import { analyseText, getVerses } from './utils/bibleUtils';
import { sendMessage } from './utils/lineUtils';
import { sendLog } from './utils/slackUtils';
export const lineClient = new line.Client({
  channelAccessToken: process.env.ACCESSTOKEN
})

exports.handler = async function (event, context) {
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

      await sendLog(
        '==============' +
        'Text' +
        '==============' +
        `${text}` +
        '==============' +
        'Response' +
        '==============' +
        `${verses}`
      )      
    } catch(e) {
      await sendLog(
        '==============' +
        'Text' +
        '==============' +
        `${text}` +
        '==============' +
        'Error' +
        '==============' +
        `${e}`
      )   
    }

    context.succeed({
      statusCode: 200,
      headers: { "X-Line-Status" : "OK"},
      body: '{"result":"completed"}'
    })
  }
}