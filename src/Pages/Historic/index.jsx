import React, { useEffect, useState } from "react";
import moment from "moment";

import {
  Container,
  HistoricContent,
  infoContainer,
  infoContent,
  infoLabel,
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
      {value ? (
        <HistoricContent>
          <infoContainer>
            <infoLabel>Especialista:</infoLabel>
            <infoContent>{value.especialista}</infoContent>
          </infoContainer>
          <infoContainer>
            <infoLabel>Profissional:</infoLabel>
            <infoContent>{value.profissional}</infoContent>
          </infoContainer>
          <infoContainer>
            <infoLabel>Mês:</infoLabel>
            <infoContent>{value.mes}</infoContent>
          </infoContainer>
          <infoContainer>
            <infoLabel>Dia:</infoLabel>
            <infoContent>{value.dia}</infoContent>
          </infoContainer>
          <infoContainer>
            <infoLabel>Horário:</infoLabel>
            <infoContent>{value.hora}</infoContent>
          </infoContainer>
        </HistoricContent>
      ) : (
        <div />
      )}
    </Container>
  );
}
