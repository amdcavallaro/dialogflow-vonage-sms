
# Women Tech Founders meeting booker demo 

This project consists of a Dialogflow agent, deployed to firebase cloud functions that shows the use of dialogflow, cloud functions and the Vonage SMS API.

This project is designed as a demo, not as a finished solution.

## Overview

In this repo you can find a node.js demo for presentation on the 01/06/2021 for [Women Tech Founders Program](https://events.withgoogle.com/wtmxdos/)

## Running Steps

1. Sign-up or Log-in to your Dialogflow account.
2. In Dialogflow's console, select Create Agent in the left navigation and fill in the required fields and Save.
3. Name for your agent, i.e. `Women-tech-founders`
4. Select Create.
5. Go to the settings ⚙ > Export and Import tab > Restore from zip.
Upload the `Women-tech-founders.zip` file located in this repo.
6. git clone `https://github.com/amdcavallaro/dialogflow-vonage-sms.git`
7. [Download and install Node.js](https://nodejs.org/)
8. [Install Firebase](https://developers.google.com/actions/dialogflow/deploy-fulfillment)
9. Within the repo directory, `$npm install` to install all of the project's dependencies. 

## Technology Stack
1. Node.js
2. Dialogflow
3. Cloud Functions for Firebase
4. Vonage SMS API
