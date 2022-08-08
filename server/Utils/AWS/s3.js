import AWS from "aws-sdk";


const s3Bucket = new AWS.S3({
    accessKeyId: "AKIA42I5MX4T7GJ6VTPZ",
    secretAccessKey: "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",
    region: "ap-south-1"
});

export const s3Upload = (options) => {
    return new Promise((resolve,reject)=>
    s3Bucket.upload(options,(error,data)=>{
        if(error) return reject(error);
        return resolve(data);
    })
    );
};