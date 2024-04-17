import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  gap: 10px;
  margin: auto;
`;
export const InputBox = styled.input`
  display: block;
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;
export const Button = styled.button`
  padding: 8px 10px;
  border: none;
  background: #336efd;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
`;
