import styled from "styled-components";

import CustomInput from "../../Components/CustomInput";

import Background from "../../Assets/Images/Background.png";

export const Container = styled.div`
  display: flex;
  width: 100%auto;
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
`;
export const Login = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 20%;
  right: 12%;
`;
export const UsernameInput = styled(CustomInput)`
  &::placeholder {
    color: #fff;
    font-size: 1rem;
  }
`;
export const PasswordInput = styled(CustomInput)`
  &::placeholder {
    color: #fff;
    font-size: 1rem;
  }
`;
export const ForgotPasswordButton = styled.a`
  margin-top: 30px;
  color: #58bb62;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    color: darkgreen;
  }

  &:focus {
    border: "none";
  }
`;
export const LoginButton = styled.button`
  background-color: #58bb62;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  width: 265px;
  height: 45px;
  margin-top: 60px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;
