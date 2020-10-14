const request = require("request");

module.exports = {
  index: async (ctx) => {
    const CURRENCY = "RWF";
    const PAYMENT_METHOD = "momo";
    const BANK_ID = 63510;
    const REDIRECT_URL =
      "https://webhook.site/06a1680d-c622-41fd-aff1-4882c1e1172d";
    const RETAILER_ID = 13;
    const MSISDN = "0785141480";
    // msisdn, cname, cnumber, retailerid,  returl, redirecturl, bankid
    const { details, refid, amount, email, cname, cnumber } = ctx.request.body;
    const data = {
      msisdn: MSISDN,
      details,
      refid,
      amount,
      currency: CURRENCY,
      email,
      cname,
      cnumber,
      pmethod: PAYMENT_METHOD,
      retailerid: RETAILER_ID,
      returl: REDIRECT_URL,
      redirecturl: REDIRECT_URL,
      bankid: BANK_ID,
    };
    const fixieRequest = request.defaults({ proxy: process.env.FIXIE_URL });
    await fixieRequest(
      {
        url: "https://pay.esicia.com/",
        headers: {
          name: "seka",
          password: "0Xjc7k",
        },
        body: data,
      },
      function callback(err, res, body) {
        ctx.send({ body, res });
      }
    );
  },
};
