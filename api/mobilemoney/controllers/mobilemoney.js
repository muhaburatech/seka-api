const axios = require("axios");

module.exports = {
  index: async (ctx) => {
    const CURRENCY = "RWF";
    const PAYMENT_METHOD = "momo";
    const BANK_ID = 63510;
    const REDIRECT_URL =
      "https://webhook.site/06a1680d-c622-41fd-aff1-4882c1e1172d";
    const RETAILER_ID = 13;
    // msisdn, cname, cnumber, retailerid,  returl, redirecturl, bankid
    const {
      msisdn,
      details,
      refid,
      amount,
      email,
      cname,
      cnumber,
      returl,
    } = ctx.request.body;
    const data = {
      msisdn,
      details,
      refid,
      amount,
      currency: CURRENCY,
      email,
      cname,
      cnumber,
      pmethod: PAYMENT_METHOD,
      retailerid: RETAILER_ID,
      returl,
      redirecturl: REDIRECT_URL,
      bankid: BANK_ID,
    };
    const { data } = await axios("", {});
  },
};
