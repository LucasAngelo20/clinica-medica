import React, { useEffect, useState } from "react";
import moment from "moment";

import {
  Container,
  HistoricContent,
  InfoContainer,
  InfoContent,
  InfoLabel,
  Content,
} from "./styles";

export default function DashboardAdmin() {
  const [value, setValue] = useState();

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
    console.log(array.filter((item) => item != null));
    setValue(array.filter((item) => item != null));
  }, []);

  return (
    <Container>
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
              <InfoContainer>
                <InfoLabel>Paciente:</InfoLabel>
                <InfoContent>{item.usuario}</InfoContent>
              </InfoContainer>
            </HistoricContent>
          </Content>
        ))
      ) : (
        <div>
          <h1>Nenhuma consulta agendada</h1>
        </div>
      )}
    </Container>
  );
}
