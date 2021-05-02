import { S3, Lambda } from 'aws-sdk'
import { readFileSync } from 'fs'
const s3 = new S3({ region: 'ap-northeast-1' })
const lambda = new Lambda({ region: 'ap-northeast-1' })

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const uploadToS3 = async () => {
  const file = readFileSync('./deploy.zip')

  const resS3 = await s3.putObject({
    Bucket: 'thebucketofalvinend',
    Key: 'boichan-alkitab-pipe/deploy.zip',
    Body: file
  }).promise()

  console.log('Response From S3')
  console.log(resS3)
  await sleep(10000)

  const resLambda = await lambda.updateFunctionCode({
    FunctionName: 'boi-chan-alkitab-function',
    S3Bucket: 'thebucketofalvinend',
    S3Key: 'boichan-alkitab-pipe/deploy.zip'
  }).promise()
  console.log('Response From Lambda')
  console.log(resLambda)

  console.log('Success')
}

uploadToS3()

// S3_BUCKET
// S3_KEY
// FUNCTION_NAME