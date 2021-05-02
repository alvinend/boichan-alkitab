"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const fs_1 = require("fs");
const s3 = new aws_sdk_1.S3({ region: 'ap-northeast-1' });
const lambda = new aws_sdk_1.Lambda({ region: 'ap-northeast-1' });
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
const uploadToS3 = () => __awaiter(this, void 0, void 0, function* () {
    const file = fs_1.readFileSync('./deploy.zip');
    const resS3 = yield s3.putObject({
        Bucket: 'thebucketofalvinend',
        Key: 'boichan-alkitab-pipe/deploy.zip',
        Body: file
    }).promise();
    console.log('Response From S3');
    console.log(resS3);
    yield sleep(10000);
    const resLambda = yield lambda.updateFunctionCode({
        FunctionName: 'boi-chan-alkitab-function',
        S3Bucket: 'thebucketofalvinend',
        S3Key: 'boichan-alkitab-pipe/deploy.zip'
    }).promise();
    console.log('Response From Lambda');
    console.log(resLambda);
    console.log('Success');
});
uploadToS3();
//# sourceMappingURL=deploy.js.map