import React, { useState} from "react";
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../services/auth';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import * as sessionActions from "../../store/session";

const Page = styled.div`
  background-color:#FAFAFA;
  height: 580px;
  width: auto;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items:center;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top:50px;
  height:500px;
  width:400px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius:2px;
`;

const Input = styled.input`
  margin-bottom:10px;
  margin-top:10px;
  padding: 4px 0 4px 4px;
  border:solid 1px lightgrey;
  border-radius:5px;
  justify-self: center;
  background-color:#FAFAFA;
`;

const SubmitButton = styled.button`
  width:163px;
  margin-bottom:4px;
  margin-top:4px;
  border:solid 1px lightgrey;
  border-radius:5px;
  background-color:salmon;
  color:#FAFAFA;

  &:hover{
    background-color:red;
  }

`;

const LoginButton = styled.button`
  width:163px;
  margin-bottom:4px;
  margin-top:4px;
  border:solid 1px lightgrey;
  border-radius:5px;
  background-color:salmon;
  color:#FAFAFA;

  &:hover{
    background-color:red;
  `;

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      dispatch(sessionActions.signup({ username, email, password }))
      // if (!user.errors) {
      //   return <Redirect to="/login" />;
      // }
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

  if (sessionUser) return <Redirect to="/" />;

  return (
    <Page>
      <Form onSubmit={onSignUp}>
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
          <NavLink to='/login'>
            <LoginButton type="button">Login</LoginButton>
          </NavLink>
        </FormContainer>
      </Form>
    </Page>
  );
};

export default SignUpForm;
