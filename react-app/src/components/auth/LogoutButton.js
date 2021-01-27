import React, { useState } from "react";
import { logout } from "../../services/auth";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Logout.css"

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <Redirect to="/login" />;

  const onLogout = (e) => {
    return dispatch(sessionActions.logout())
  };

  return <button className="logout" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
