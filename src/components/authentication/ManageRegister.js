import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { registerUser } from "../../api/auth/registerApi";
import { toast } from "react-toastify";

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
  width: 80%;
  margin: 1.5em;
`;

const Label = styled.label`
  display: block;
`;

function ManageRegister() {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "") {
      console.log("email empty");
      return;
    }
    if (username === "") {
      console.log("username empty");
      return;
    }
    if (password === "") {
      console.log("password empty");
      return;
    }
    const info = {
      name: username,
      email: email,
      password: password,
    };
    if (process.env.NODE_ENV === "development") {
      const res = await registerUser(info);
      if (res.message === undefined) {
        history.push("/");
      } else {
        // replace with toastify
        toast.error("User Already Exists");
      }
    }
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

  return (
    <Wrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>Register</Label>
            <Input
              onChange={handleChange}
              type="input"
              placeholder="email..."
              name="email"
              id="email"
            ></Input>
          </div>
          <div>
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
              type="password"
              placeholder="password..."
              name="password"
              id="password"
            ></Input>
          </div>
          <button type="submit" class="btn btn-outline-light">
            Register
          </button>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}

export default ManageRegister;
