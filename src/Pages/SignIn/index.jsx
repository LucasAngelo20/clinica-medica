import React from "react";

import {
  Container,
  Login,
  UsernameInput,
  PasswordInput,
  ForgotPasswordButton,
  LoginButton,
  Logo,
} from "./styles";

import LogoIcon from "../../Assets/Images/Logo.png";
import user from '../../Data/users.json'

import UserIcon from "../../Assets/Images/UserIcon.png";
import EyeIcon from "../../Assets/Images/EyeIcon.png";
import { SignedContext } from "../../Context/SignedProvider";

export default function SignIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setUser } = React.useContext(SignedContext);

  return (
    <Container>
      <Login>
        <Logo src={LogoIcon} />
        <UsernameInput
          placeholder="Nome de usuário"
          type="text"
          icon={UserIcon}
          iconSize={20}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PasswordInput
          placeholder="Senha"
          type="password"
          icon={EyeIcon}
          iconSize={20}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ForgotPasswordButton>Esqueceu a senha?</ForgotPasswordButton>
        <LoginButton
          to="/Dashboard"
          onClick={() =>
            setUser({
              login: username,
              password: password,
            })
          }
        >
          Entrar
        </LoginButton>
      </Login>
    </Container>
  );
}
