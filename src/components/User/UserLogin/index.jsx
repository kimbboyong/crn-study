import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../../../firebase";

const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;

const errors = {
  "auth/email-already-in-use": "중복된 이메일임.",
};

const UserLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") return;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      if (e.code) {
        setError(e.message);
      }
    } finally {
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
        />
        <Input type="submit" value="Create Account" />
      </Form>
      {<div>{error}</div>}
    </Wrapper>
  );
};

export default UserLogin;
