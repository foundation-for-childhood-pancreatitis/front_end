import React from 'react';
import {
    CreditCardNumberInput,
    CreditCardExpirationDateInput,
    CreditCardPostalCodeInput,
    CreditCardCVVInput,
    CreditCardSubmitButton
  } from 'react-square-payment-form';

  import styled from 'styled-components';

  const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    @media (max-width: 550px) {
        width: 90vw;
        margin: 1rem;
        padding: 1rem;   
    }
  `;
  
  const Payment = () => (
    <CardDiv>
    
        <fieldset className="sq-fieldset">
        <CreditCardNumberInput />
        <div className="sq-form-third">
            <CreditCardExpirationDateInput />
        </div>
    
        <div className="sq-form-third">
            <CreditCardPostalCodeInput />
        </div>
    
        <div className="sq-form-third">
            <CreditCardCVVInput />
        </div>
        </fieldset>
    
        <CreditCardSubmitButton>
            Pay $1.00
        </CreditCardSubmitButton>
    
    </CardDiv>
  )

  export default Payment