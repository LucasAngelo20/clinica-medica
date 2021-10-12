import React from "react";
import moment from "moment";

import {
  Container,
  Content,
  Especialist,
  Professional,
  Month,
  Day,
  Hour,
  Select,
  Option,
  ConfirmButton,
} from "./styles";

import data from "../../Data/data.json";
import { parse } from "micromatch";

const EspecialistArray = data.Especialist;
const ProfessionalArray = data.Professional;
const MonthArray = data.Month;
const DayArray = data.Day;
const HourArray = data.Hour;

export default function Scheduling() {
  const [especialist, setEspecialist] = React.useState(EspecialistArray[0]);
  const [professional, setProfessional] = React.useState(ProfessionalArray[0]);
  const [month, setMonth] = React.useState(MonthArray[0]);
  const [day, setDay] = React.useState(DayArray[0]);
  const [hour, setHour] = React.useState(HourArray[0]);
  const [dataAtual, setDataAtual] = React.useState(
    moment(new Date()).format("DD/MM/YYYY")
  );

  function handleSaveInfos() {
    const especialista = especialist.Name ? especialist.Name : especialist;
    const profissional = professional.Name ? professional.Name : professional;
    const mes = month.Name ? month.Name : month;
    const dia = day.Name ? day.Name : day;
    const hora = hour.Name ? hour.Name : hour;

    localStorage.setItem(
      `@Consulta/${dataAtual}`,
      `
      
      {
      "especialista": "${especialista}",
      "profissional": "${profissional}",
      "mes": "${mes}",
      "dia": ${dia},
      "hora": "${hora}"
      }

      `
    );
  }

  return (
    <Container>
      <Content>
        <Especialist>
          <Select
            value={especialist}
            onChange={(e) => {
              setEspecialist(e.target.value);
            }}
          >
            {EspecialistArray.map((item) => (
              <Option selected value={item.Name}>
                {item.Name}
              </Option>
            ))}
          </Select>
        </Especialist>
        <Professional>
          <Select
            value={professional}
            onChange={(e) => {
              setProfessional(e.target.value);
            }}
          >
            {ProfessionalArray.map((item) => (
              <Option selected value={item.Name}>
                {item.Name}
              </Option>
            ))}
          </Select>
        </Professional>
        <Month>
          <Select
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          >
            {MonthArray.map((item) => (
              <Option selected value={item.Name}>
                {item.Name}
              </Option>
            ))}
          </Select>
        </Month>
        <Day>
          <Select
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
          >
            {DayArray.map((item) => (
              <Option selected value={item.Name}>
                {item.Name}
              </Option>
            ))}
          </Select>
        </Day>
        <Hour>
          <Select
            value={hour}
            onChange={(e) => {
              setHour(e.target.value);
            }}
          >
            {HourArray.map((item) => (
              <Option selected value={item.Name}>
                {item.Name}
              </Option>
            ))}
          </Select>
        </Hour>
        <ConfirmButton onClick={() => handleSaveInfos()}>
          Confirmar
        </ConfirmButton>
        <ConfirmButton
          onClick={() => {
            localStorage.setItem(`@ContadorDeCosultas/${dataAtual}`, 1);
            const value = localStorage.getItem(`@Consulta/${dataAtual}`);
            console.log(JSON.parse(value));
          }}
        >
          Confirmar
        </ConfirmButton>
      </Content>
    </Container>
  );
}
