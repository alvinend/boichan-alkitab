'use strict';
import * as line from '@line/bot-sdk'
import { getVerses } from './utils/bibleUtils';
import { sendMessage } from './utils/lineUtils';
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
    const replyToken = body.events[0].replyToken

    // Kej 1:1

    const keyword = text.split(' ')[0]
    const chapter = text.split(' ')[1].split(':')[0]
    const verse = text.split(' ')[1].split(':')[1]

    const verses = await getVerses({
      keyword,
      chapter,
      verse
    })

    await sendMessage(verses, replyToken)



    context.succeed({
      statusCode: 200,
      headers: { "X-Line-Status" : "OK"},
      body: '{"result":"completed"}'
    })
  }
}