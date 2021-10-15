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

export default function Historic() {
  const [value, setValue] = useState("");
  const [dataAtual, setDataAtual] = useState(
    moment(new Date()).format("DD/MM/YYYY")
  );

  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem(`@Consulta/${dataAtual}`)));
  }, []);
  return (
    <Container>
      <Content>
        {value ? (
          <HistoricContent>
            <InfoContainer>
              <InfoLabel>Especialista:</InfoLabel>
              <InfoContent>{value.especialista}</InfoContent>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Profissional:</InfoLabel>
              <InfoContent>{value.profissional}</InfoContent>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Mês:</InfoLabel>
              <InfoContent>{value.mes}</InfoContent>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Dia:</InfoLabel>
              <InfoContent>{value.dia}</InfoContent>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>Horário:</InfoLabel>
              <InfoContent>{value.hora}</InfoContent>
            </InfoContainer>
          </HistoricContent>
        ) : (
          <div />
        )}
      </Content>
    </Container>
  );
}
