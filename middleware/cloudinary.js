/*const cloudinary = require("cloudinary").v2;
const _ = require('underscore');

//const Q = require("q");

function upload(file) {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_KEY,
        api_secret: process.env.CLOUD_SECRET

    });

    return new Q.Promise((resolve, reject) => {
        cloudinary.uploader.upload(file, {width: 100, height: 100}, (err, res) => {
            if (err) {
                console.log('cloudinary err:', err);
                reject(err);
            } else {
                console.log('cloudinary res:', res);
                return resolve(res);
            }
        });
    });
};


module.exports.upload = upload;*/