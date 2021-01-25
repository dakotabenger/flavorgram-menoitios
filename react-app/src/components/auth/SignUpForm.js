import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FAFAFA;
`

const Input = styled.input`
  margin-bottom:4px;
  margin-top:4px;
  padding: 4px 0 4px 4px;
  border:solid 1px;
  border-radius:5px;
  justify-self: center;
`

const SubmitButton = styled.button`
  width:24%;
  margin-bottom:4px;
  margin-top:4px;
  border:solid 1px;
  border-radius:5px
`

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <FormContainer>
        <div>
          <Input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
          placeholder='User Name'
          ></Input>
        </div>
        <div>
          <Input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            placeholder='Email'
          ></Input>
        </div>
        <div>
          <Input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            placeholder='Password'
          ></Input>
        </div>
        <div>
          <Input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            placeholder='Confirm Password'
          ></Input>
        </div>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </FormContainer>
    </form>
  );
};

export default SignUpForm;
