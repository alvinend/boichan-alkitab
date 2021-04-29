'use strict';
import line from '@line/bot-sdk'
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

    await sendMessage(text, body.events[0].replyToken)

    context.succeed({
      statusCode: 200,
      headers: { "X-Line-Status" : "OK"},
      body: '{"result":"completed"}'
    })
  }
}