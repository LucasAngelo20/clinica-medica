import React from "react";

import {
  Container,
  Content,
  Especialist,
  Professional,
  Month,
  Day,
  Hour,
  Option
} from "./styles";

import Data from "../../Data/data.json";

const Schedule = Data.Schedule;

export default function Scheduling() {
  return (
    <Container>
      <Content>
        <Especialist>
          
        </Especialist>
        <Professional></Professional>
        <Month></Month>
        <Day></Day>
        <Hour></Hour>
      </Content>
    </Container>
  );
}
