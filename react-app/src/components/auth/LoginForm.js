import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import * as recipesActions from "../../store/recipes";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 105px;
  height: 500px;
  width: 400px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 3px;
  box-shadow: 5px 8px 10px #aaaaaa;
`;

const Input = styled.input`
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 4px 0 4px 4px;
  border: solid 1px lightgrey;
  border-radius: 5px;
  justify-self: center;
  background-color: #fafafa;
`;

const SubmitButton = styled.button`
  width: 163px;
  margin-bottom: 4px;
  margin-top: 4px;
  border: solid 1px lightgrey;
  border-radius: 5px;
  background-color: salmon;
  color: #fafafa;

  &:hover {
    background-color: red;
  }
`;

const SignUpButton = styled.button`
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

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled.div`
  background-color: #fafafa;
  height: 580px;
  width: auto;
`;

const Demo = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/
  color: #069;
  text-decoration: underline;
  cursor: pointer;

  &:hover{
    background-color:red;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 75px;
`;

const Util = styled.li`
  background-color: red;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199, 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  display: inline;
  // align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  color: black;
  // position:relative;
  // bottom: 30px;
  // right: 300px;
`;

const Name = styled.h2`
  color: black;
  display: inline;
  font-size: 30px;
  font-family: "kunbh sans", sans-serif;
`;

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/" />;

  const onLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(sessionActions.login({ email, password })).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
      dispatch(recipesActions.addRecipes());
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoUser = (event) => {
    setEmail("demo@aa.io");
    setPassword("password");
  };

  return (
    <Page>
      <Form onSubmit={onLogin}>
        <FormContainer>
          <Logo>
            <Util>
              <i className="fas fa-utensils"></i>
            </Util>
            <Name>Flavorgram</Name>
          </Logo>
          <h3> Please Sign-In </h3>
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
          <NavLink to="/sign-up">
            <SignUpButton type="button">Sign Up</SignUpButton>
          </NavLink>
          <Demo type="submit" onClick={demoUser}>
            {" "}
            Demo{" "}
          </Demo>
        </FormContainer>
      </Form>
      <FooterBox>
        Contributors
        <Contribute>
          <NameList href="https://github.com/dakotabenger">
            Dakota Benger{" "}
          </NameList>
          <NameList href="https://github.com/RamsesRomeroJr">
            Ramses Romero
          </NameList>
          <NameList href="https://github.com/dezadkins">Dez Adkins</NameList>
          <NameList href="https://github.com/dereknungesser">
            Derek Nungesser
          </NameList>
        </Contribute>
      </FooterBox>
    </Page>
  );
};

export default LoginForm;

const FooterBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: lightblue; */
  width: 100%;
  min-height: 20vh;
  margin-top: 80px;
  font-weight: 800;
  font-size: 16px;
  font-family: "Kumbh Sans", sans-serif;
  color: #8b8b94;
`;

const Contribute = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  font-family: "Kumbh Sans", sans-serif;
`;

const NameList = styled.a`
  font-family: "Kumbh Sans", sans-serif;
  text-decoration: none;
  margin-top: 10px;
  color: #8b8b94;
  font-size: 14px;
  font-weight: 200;
`;
