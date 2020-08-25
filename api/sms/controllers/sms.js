const accountSid = "AC85fd63e4b6a9358fc059191b7d6e13d4";
const authToken = "0c512764195b6855a2df035b0b7d9386";
const client = require("twilio")(accountSid, authToken);

module.exports = {
  index: async (ctx) => {
    const { phonePlusCode, otp } = ctx.request.body;
    const res = await client.messages
      .create({
        body: `Your SEKA verification code is ${otp}`,
        from: "+14143770384",
        to: `${phonePlusCode}`,
      })
      .then((message) => console.log(message.sid));

    ctx.send(res);
  },
};
