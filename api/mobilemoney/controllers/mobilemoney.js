const request = require("request");
const btoa = require('btoa')

module.exports = {
  index: async (ctx) => {
 const CURRENCY = "RWF";
    const PAYMENT_METHOD = "momo";
    const BANK_ID = '63510';
    const REDIRECT_URL = 'https://seka-api.herokuapp.com';
    const RETAILER_ID = '13';
    const MSISDN = "250789453215";
    const RET_URL = 'https://seka-postback-node.herokuapp.com/postback';
    // msisdn, cname, cnumber, retailerid,  returl, redirecturl, bankid

    const { details, refid, amount, email, cname, cnumber } = ctx.request.body;

    const data = {
      msisdn: MSISDN,
      details,
      refid,
      amount: Number(amount),
      currency: CURRENCY,
      email,
      cname,
      cnumber,
      pmethod: PAYMENT_METHOD,
      retailerid: RETAILER_ID,
      returl: RET_URL,
      redirecturl: REDIRECT_URL,
      bankid: BANK_ID,
    };

    const options = {
      url: 'https://pay.esicia.com',
      method: 'POST',
      
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `Basic ${btoa('sekaa:0Xjc7k')}`
      },
  
      body: JSON.stringify(data),
  };
  
    const fixieRequest = request.defaults({ proxy: process.env.FIXIE_URL });
    const res = await fixieRequest(
      options,
      function(err, res, body) {
  
        console.log("-->", body);
        return body;
    }
    );

    return res;

  },
};


