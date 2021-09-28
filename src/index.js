require("dotenv").config();

// Express Server
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_ACTIVE_NUMBER;
const client = require("twilio")(accountSid, authToken);

// Middleware to accept JSON
app.use(express.json());

// Serve static content like stylesheets and images
app.use(express.static(path.join(__dirname, "public")));

// Root Route
app.get("/", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

// Route for Twilio Services
app.post("/send", (req, res) => {
  const { recipient, message } = req.body;
  client.messages
    .create({
      body: message,
      from: twilioNumber,
      to: "+1".concat(recipient),
    })
    .then(() => {
      return res
        .status(200)
        .send(JSON.stringify({ ok: true, message: "Success!" }));
    })
    .catch((e) => {
      return res
        .status(e.status)
        .send(JSON.stringify({ ok: false, message: e.message }));
    });
});

// Server Instance
app.listen(port, () => {
  console.log("Example app listening on port: ", port);
});
