import React, { useContext, useEffect, useState } from "react";
import moment from "moment";

import {
  Container,
  HistoricContent,
  InfoContainer,
  InfoContent,
  InfoLabel,
  Content,
} from "./styles";
import { Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { SignedContext } from "../../Context/SignedProvider";

export default function Historic() {
  const { user } = useContext(SignedContext);

  const [value, setValue] = useState("");
  const [dataAtual, setDataAtual] = useState(
    moment(new Date()).format("DD/MM/YYYY")
  );

  useEffect(() => {
    const array = [];
    for (var i = 0; i < localStorage.getItem("@ContadorDeConsultas"); i++) {
      array[i] = JSON.parse(
        localStorage.getItem(`@Consulta/${i + 1}/${dataAtual}`)
      );
    }

    setValue(array.filter((item) => item != null && item.usuario == user.name));
    console.log(
      array.filter((item) => item != null && item.usuario == user.name),
      user
    );
  }, []);
  return (
    <Container>
      <Link
        style={{
          position: "absolute",
          top: 10,
          left: 20,
          textDecoration: "none",
          Color: "#DDD",
        }}
        to="/Dashboard"
      >
        {" "}
        Voltar{" "}
      </Link>
      {value ? (
        value.map((item) => (
          <Content>
            <HistoricContent>
              <InfoContainer>
                <InfoLabel>Especialista:</InfoLabel>
                <InfoContent>{item.especialista}</InfoContent>
              </InfoContainer>
              <InfoContainer>
                <InfoLabel>Profissional:</InfoLabel>
                <InfoContent>{item.profissional}</InfoContent>
              </InfoContainer>
              <InfoContainer>
                <InfoLabel>Mês:</InfoLabel>
                <InfoContent>{item.mes}</InfoContent>
              </InfoContainer>
              <InfoContainer>
                <InfoLabel>Dia:</InfoLabel>
                <InfoContent>{item.dia}</InfoContent>
              </InfoContainer>
              <InfoContainer>
                <InfoLabel>Horário:</InfoLabel>
                <InfoContent>{item.hora}</InfoContent>
              </InfoContainer>
            </HistoricContent>
          </Content>
        ))
      ) : (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1>Usuário não possui consultas</h1>
        </div>
      )}
    </Container>
  );
}
