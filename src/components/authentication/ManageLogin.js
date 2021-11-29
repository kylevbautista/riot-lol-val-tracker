import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  border: solid;
  height: 95vh;
`;

function ManageLogin() {
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    console.log("");
  };
  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <Wrapper>
      <div>Hello</div>
      <form>
        <input
          onChange={handleChange}
          type="input"
          placeholder="email..."
          name="email"
          id="email"
        ></input>
        <input
          type="input"
          placeholder="username"
          name="username..."
          id="username"
        ></input>
        <input
          type="input"
          placeholder="password..."
          name="password"
          id="password"
        ></input>
        <button></button>
      </form>
    </Wrapper>
  );
}

export default ManageLogin;
