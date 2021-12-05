import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import "./Login.css";
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userLActions from "../../redux/actions/userLActions";

const Wrapper = styled.div`
  display: flex;
  color: white;
  height: 95vh;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 60%;
`;
const Form = styled.form`
  background-color: #404040;
  padding: 1.5em;
  border-radius: 5px;
  box-shadow: "0 1px 6px 1px black";
`;
const Input = styled.input`
  width: 90%;
  margin: 1.5em;
`;

const Label = styled.label`
  display: block;
`;

function ManageLogin({ isLoggedIn, actions }) {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // const handleRegister = () => {
  //   history.push("/register");
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "") {
      console.log("email empty");
    }
    if (username === "") {
      console.log("username empty");
    }
    if (password === "") {
      console.log("password empty");
    }
    // console.log("submit form");
    // console.log("username", username);
    // console.log("email", email);
    // console.log("password", password);
    actions.login({ name: username, password: password });
  };
  const handleChange = (event) => {
    if (event.target.id === "username") {
      setUserName(event.target.value);
    }
    if (event.target.id === "email") {
      setEmail(event.target.value);
    }
    if (event.target.id === "password") {
      setPassword(event.target.value);
    }
  };
  useEffect(() => {
    if (isLoggedIn === true) {
      history.push("/");
    }
    //console.log("login status", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Wrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>Login</Label>
            <Input
              onChange={handleChange}
              type="input"
              placeholder="username"
              name="username..."
              id="username"
            ></Input>
          </div>
          <div>
            <Input
              onChange={handleChange}
              type="input"
              placeholder="password..."
              name="password"
              id="password"
            ></Input>
          </div>
          <div id="ok">
            <button id="login" type="submit" class="btn btn-outline-light">
              Login
            </button>
          </div>
          <div class="lmao">
            <div class="new-user">
              <span>New? </span>
              <a href="/register">Sign Up Here</a>
            </div>
          </div>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(userLActions.login, dispatch),
      logout: bindActionCreators(userLActions.logoutSucces, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageLogin);
