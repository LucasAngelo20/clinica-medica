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
import user from "../../Data/users.json";

import UserIcon from "../../Assets/Images/UserIcon.png";
import EyeIcon from "../../Assets/Images/EyeIcon.png";
import { SignedContext } from "../../Context/SignedProvider";

export default function SignIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [admin, setAdmin] = React.useState(false);
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
          onChange={(e) => {
            if (e.target.value == "admin") {
              setAdmin(true);
            } else {
              setAdmin(false);
            }
            setUsername(e.target.value);
          }}
        />
        <PasswordInput
          placeholder="Senha"
          type="password"
          icon={EyeIcon}
          iconSize={20}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ForgotPasswordButton>Esqueceu a senha?</ForgotPasswordButton>
        {username == "admin" && password == "admin" ? (
          <LoginButton
            to="/DashboardAdmin"
            onClick={() =>
              setUser({
                login: username,
                password: password,
                name: "Admin",
              })
            }
          >
            Entrar Admin
          </LoginButton>
        ) : username == "paciente" && password == "123" ? (
          <LoginButton
            to="/Dashboard"
            onClick={() => {
              if (localStorage.getItem("@ContadorDeConsultas")) {
                return;
              } else {
                localStorage.setItem("@ContadorDeConsultas", 1);
              }
              setUser({
                login: username,
                password: password,
                name: "paciente",
              });
            }}
          >
            Entrar
          </LoginButton>
        ) : username == "paciente2" && password == "123" ? (
          <LoginButton
            to="/Dashboard"
            onClick={() => {
              if (localStorage.getItem("@ContadorDeConsultas")) {
                return;
              } else {
                localStorage.setItem("@ContadorDeConsultas", 1);
              }
              setUser({
                login: username,
                password: password,
                name: "paciente2",
              });
            }}
          >
            Entrar
          </LoginButton>
        ) : username == "" && password != "" ? (
          <>
            <LoginButton>Entrar</LoginButton>
            <span style={{ color: "red" }}>Usuário ou senha errados!</span>
          </>
        ) : username != "" && password == "" ? (
          <>
            <LoginButton>Entrar</LoginButton>
            <span style={{ color: "red" }}>Usuário ou senha errados!</span>
          </>
        ) : (
          <LoginButton to="/">Entrar</LoginButton>
        )}
      </Login>
    </Container>
  );
}
