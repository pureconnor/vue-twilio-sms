# Build a Vue App to Send SMS with Twilio
This repository contains a high level demonstration of creating a Vue app that
integrates with Twilio's messaging API to create an app that can send SMS to a real phone number.

# To Get Started
If you're cloning this repo as part of a follow-along you'll need to do a few things.

1. Install packages
   <pre>yarn</pre>
2. To connect to Twilio and enable your app to text your own phone number you'll the following:
   1. [Account SID](https://www.twilio.com/console)
   2. [Auth Token](https://www.twilio.com/console)
   3. [Active SMS-enabled Twilio Phone number](https://www.twilio.com/docs/sms/quickstart/node#sign-up-for-twilio-and-get-a-twilio-phone-number)
   4. [Verified Phone Number](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio)
3. If you have this all set up, place these in your <code>.env</code> file and either match the binding names set in <code>src/index.js</code> or adjust them to match your new binding names.
4. Run the project
   <pre>yarn start</pre>

### If you stumbled here by chance I encourage you to check out my full write up on this app on Twilio Voices [here]()
