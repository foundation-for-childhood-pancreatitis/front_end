import React, {useState} from 'react'
import SquarePaymentForm from 'react-square-payment-form';
import 'react-square-payment-form/lib/default.css'
import styled from 'styled-components';
import CardDetails from './CreditCard';
import Variables from '../variables';
import axios from '../../utils/api';


const SquareForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${Variables.Spacing.Spacing.large_space};
    h1{
        font-size: ${Variables.Fonts.h2FontSize};
        margin-bottom: ${Variables.Spacing.Spacing.large_space};
        margin-top: 0;
    }
    @media (max-width: 550px) {
      align-items: space-around; 
      h1 {
          font-size: ${Variables.Fonts.h3FontSize};
      } 
    }
`;

const UserSection = styled.div`
    display: flex;
    label {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        input {
            outline: none;
            padding: 1rem;
            height: 30px;
            background-color: rgba(white, 0.5);
            transition-property: background;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
            transition-delay: 0s;
            &: focus {
                border: 1px solid #0080FF;
            }
        }
    };
`;
export default function PaymentPage() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [userEmail, setEmail] = useState('');
    const [amount, setAmount] = useState("");
    const [outline, setOutline] = useState(null);

    const emailHandleChange = (e) => {
        setOutline(null)
        switch(e.target.name){
            case 'amount':
                return setAmount(e.target.value)
            case 'userEmail':
                return setEmail(e.target.value)
        }
    }
    const cardNonceResponseReceived = (errors, nonce, cardData, buyerVerificationToken) => {
        if(!userEmail && !amount) {
            setOutline('red')
            setErrorMessage({errorMessages:['email and amount required']});
            return
        }
        if (errors) {
            setErrorMessage({ errorMessages: errors.map(error => error.message) })
          return
        }
    
        setErrorMessage({ errorMessages: [] })
        return axios().post("/donations",{
            email:userEmail,
            amount,
            onLine: true,
            "stripe_id": buyerVerificationToken
        }).then(res => alert("thank you for donationing "))
      };

    const createVerificationDetails = ()=> {
        return {
            amount: amount,
            currencyCode: "USD",
            intent: "CHARGE",
            billingContact: {
                email: userEmail,
            }
        }
    };
    return (
        <SquareForm>
            <h1>Payment Page</h1>
            
            <SquarePaymentForm
                sandbox={true}
                applicationId={process.env.REACT_APP_APPLICATION_ID}
                locationId={process.env.REACT_APP_LOCATION_ID}
                cardNonceResponseReceived={cardNonceResponseReceived}
                createVerificationDetails={createVerificationDetails}
            >
                <UserSection>
                    <label style={{marginRight: '1rem'}}>
                        Email:
                        <input 
                            value={userEmail} 
                            onChange={emailHandleChange}
                            name='userEmail'
                            type='email'
                            style={{border:outline?`1px solid ${outline}`: "1px solid #0080FF"}}
                        />
                    </label>
                    <label>
                        Amount:
                        <input 
                            value={amount} 
                            onChange={emailHandleChange}
                            placeholder='$1'
                            name="amount"
                            defaultValue='1'
                            style={{border:outline?`1px solid ${outline}`: "1px solid #0080FF"}}
                        />
                    </label>
                </UserSection>
                <CardDetails amount={amount}/>
            </SquarePaymentForm>

            <div className="sq-error-message" 
                style={{
                    textAlign: 'center'
                    }}>
                {errorMessage && errorMessage.errorMessages.map(message =>
                <li key={`sq-error-${message}`}>{message}</li>
                )}
            </div>

        </SquareForm>
    )
}