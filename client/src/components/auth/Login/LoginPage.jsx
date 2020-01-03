import React, { useState } from 'react';
import styled from 'styled-components'
import TextInput from '../../commons/TextInput';
import { Solid, Primary } from '../../index';

const LoginPage = () => {
    const [userInput, setUserInput] = useState({
        email: "",
        password: ""
      });  
      const handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setUserInput(userInput => ({ ...userInput, [name]: value }));
      };
    
    return (
            <FormContainer>
              <FormTitle>Admin Login</FormTitle>
              <StyledForm
                className="text-center border border-light p-5"
              >
                <input type="hidden" name="form-name" value="login" />
                <TextInput
                  type={"text"}
                  title="Email"
                  className="form-control mb-4"
                  id="title"
                  value={userInput.email}
                  name={"email"}
                  onChange={handleInputChange}
                />
                <TextInput
                  type={"email"}
                  title="Password"
                  className="form-control mb-4"
                  id="title"
                  value={userInput.password}
                  name={"password"}
                  onChange={handleInputChange}
                />
                <FormButton type="submit">Login</FormButton>
              </StyledForm>
            </FormContainer>
    );
  };

  const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top: 1px solid ${Primary.Purple};
  margin: 20rem auto;
`;

const StyledForm = styled.form`
  background: ${Solid.WHITE};
  width: 100%;
  max-height: 100vh;
  padding-top: 4rem !important;
  a:hover {
    text-decoration: underline;
  }
  input:focus,
  textarea:focus {
    outline: none !important;
    border: 1px solid ${Primary.Purple};
    box-shadow: 0 0 10px #719ece;
  }

`;

const FormTitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 0.3em;
  -webkit-font-smoothing: antialiased;
`;

const FormButton = styled.button.attrs({
  type: "submit"
})`
  color: ${Solid.WHITE};
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background: ${Primary.Purple};
  white-space: nowrap;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem 0 0 1rem;
  padding: 0.5rem 2rem;
  text-decoration: none !important;
`;
  
  export default LoginPage;
  