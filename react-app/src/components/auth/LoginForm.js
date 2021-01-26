import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

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

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items:center;
`

const Page = styled.div`
  background-color:#FAFAFA;
  height: 580px;
  width: auto;
`

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/" />;

  const onLogin = async (e) => {
    e.preventDefault();

    return dispatch(sessionActions.login({ email, password }))
    .catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });

  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Page>
      <Form onSubmit={onLogin}>
        <FormContainer>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <Input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          </div>
          <SubmitButton type="submit">Login</SubmitButton>
        </FormContainer>
      </Form>
    </Page>
  );
};

export default LoginForm;
