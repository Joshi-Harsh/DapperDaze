const Razorpay = require('razorpay');

apiKey = "rzp_test_wNiBouLVcGOr1o";
apiSecret = "5ezHMUBMVIWPCevFTYnBp5lh";

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;