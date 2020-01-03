import React, {useState} from 'react'
import SquarePaymentForm from 'react-square-payment-form';
import 'react-square-payment-form/lib/default.css'
import styled from 'styled-components';
import CardDetails from './CreditCard';
import Variables from '../variables';


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
export default function PaymentPage() {
    const [errorMessage, setErrorMessage] = useState(null)

    const cardNonceResponseReceived = (errors, nonce, cardData, buyerVerificationToken) => {
        if (errors) {
            setErrorMessage({ errorMessages: errors.map(error => error.message) })
          return
        }
    
        setErrorMessage({ errorMessages: [] })
        alert("nonce created: " + nonce + ", buyerVerificationToken: " + buyerVerificationToken)
      };
    return (
        <SquareForm>
            <h1>Payment Page</h1>
            
            <SquarePaymentForm
                sandbox={true}
                applicationId={process.env.REACT_APP_APPLICATION_ID}
                locationId={process.env.REACT_APP_LOCATION_ID}
                cardNonceResponseReceived={cardNonceResponseReceived}
            >
                <CardDetails />
            </SquarePaymentForm>

            <div className="sq-error-message">
                {errorMessage && errorMessage.errorMessages.map(message =>
                <li key={`sq-error-${message}`}>{message}</li>
                )}
            </div>

        </SquareForm>
    )
}