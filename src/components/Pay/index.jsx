import "./pay.css";
import logo from "../../assets/wolf.png"
import StripeCheckout from "react-stripe-checkout";
import { useState,useEffect } from "react";

const KEY = "pk_test_51MfPU6AWFbKjMMky0uygbgUTe4rH0BSJ3r2xzb8twULX3xc1jE3DwL0nCS44wLyYuylRCsYV3uqTdlTwoiy83VKA00agthbDiA"
export const Pay = () => {

  const [stripeToken, setStripeToken] = useState(null)
    const onToKen =(token) =>{
        console.log(token)
    }

    useEffect(()=>{
      const makeRequest = async () =>{
        try{
          const res = await axios.post("http://localhost:5000/api/checkout/payment",{
            tokenId:stripeToken.id,
            amount:2000,
          }
          );
          console.log(res.data);
        }catch(err){
          console.log(err);
        }
      };
      stripeToken && makeRequest
    },[stripeToken])
    return (
        <StripeCheckout
        name = "Aaron Shop"
        image={logo}
        billingAddress
        shippingAddress
        description="your total is $20"
        amount={2000}
        token={onToKen}
        stripeKey={KEY}>
             <div className="container">
          <div className="button">Pay</div>
        </div>
        </StripeCheckout>
       
      );
};
