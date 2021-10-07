import React from "react";
import { Redirect } from "react-router-dom";

import {
  Container,
  Login,
  UsernameInput,
  PasswordInput,
  ForgotPasswordButton,
  LoginButton,
} from "./styles";

import UserIcon from "../../Assets/Images/UserIcon.png";
import EyeIcon from "../../Assets/Images/EyeIcon.png";

export default function SignIn() {
  return (
    <Container>
      <Login>
        <UsernameInput
          placeholder="Nome de usuário"
          icon={UserIcon}
          iconSize={20}
        />
        <PasswordInput placeholder="Senha" icon={EyeIcon} iconSize={20} />
        <ForgotPasswordButton>Esqueceu a senha?</ForgotPasswordButton>
        <LoginButton onClick={() => <Redirect to="/Dashboard" />}>
          Entrar
        </LoginButton>
      </Login>
    </Container>
  );
}
