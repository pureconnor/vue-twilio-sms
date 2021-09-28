### create vue app with cdn or vite
### create express server
***
#### Twilio (https://www.twilio.com/docs/sms/quickstart/node):
- log in/create account @ twilio
- create phone number
- get account_sid and auth_token from console [General Settings for Account](https://console.twilio.com/us1/account/manage-account/general-settings?frameUrl=%2Fconsole%2Fproject%2Fsettings%3Fx-target-region%3Dus1)
- put creds into dotenv
- create node file (server/test.js)
- You must verify your personal phone number (https://support.twilio.com/hc/en-us/articles/223135427-What-s-the-Difference-Between-a-Verified-Phone-Number-and-a-Twilio-Phone-Number-)
- You cannot use test credentials to send to real numbers. You can only use test crednetials to verify that your api calls are successful
- create post route in server to call twilio's send-message function
  - supply number & message in body