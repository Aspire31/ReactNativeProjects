import React, { Component } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { RNS3 } from 'react-native-aws3';


const options = {
    keyPrefix: "uploads/",
    bucket: "appinventiv-development",
    region: "us-east-1",
    accessKey: "AKIAJ3UHQTWRRT2AH3RA",
    secretKey: "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",
    successActionStatus: 201
}

export default class commonMethods extends Component {

    static imagePicker(callBack) {
        ImagePicker.openPicker({
            width: 900,
            height: 400,
            cropping: true
        }).then(image => {
            callBack(image.path)
        });
    }

    static uploadImage(imageKey, callBack, loadBar) {

        console.warn("within common methods", imageKey)
        const file = {
            uri: 'file://' + imageKey,
            name: 'image.png',
            type: 'image/png'
        }
        RNS3.put(file, options).then(response => {
            if (response.status !== 201)
                throw new Error("Failed to upload image to S3");
            // console.log(response.body);
            console.log("Image has been Uploaded")
            callBack(response.body)
        })
            .progress((e) =>
                // console.log(e.loaded / e.total)
                (console.log("percentage", e.percent),
                    loadBar(e.percent)
                )
            );
    }
}
