'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const { dialogflow } = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    apiKey: "<YOUR_VONAGE_API_KEY>",
    apiSecret: "<YOUR_VONAGE_API_SECRET>"
});

const from = "Vonage APIs";
const to = "<YOUR_PHONE_NUMBER>";

admin.initializeApp();

// Instantiate the Dialogflow client.
const app = dialogflow({ debug: true });

// Handle the Dialogflow intent named 'Book a meeting'.
// The intent collects the parameters time and date.
app.intent('Book a meeting', async (conv, { time, date }) => {
    const result = await new Promise((resolve, reject) => {
        vonage.message.sendSms(from, to, `Meeting booked at ${time} on date:${date}`, (err, responseData) => {
            if (err) {
                return reject(new Error(err));
            } else {
                if (responseData.messages[0].status === "0") {
                    return resolve(`Message sent successfully: ${responseData.messages[0]['message-id']}`);
                } else {
                    return reject(new Error(`Message failed with error: ${responseData.messages[0]['error-text']}`));
                }
            }
        });
        // Responds the user giving a booking confirmation.
        conv.close(`Meeting booked at ${time} on date: ${date}.`);
    });

});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
