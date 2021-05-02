require('dotenv').config()

import { sendLog } from "./slackUtils";

sendLog(
  '```\n' +
  'abcd' + 
  '```\n'
)