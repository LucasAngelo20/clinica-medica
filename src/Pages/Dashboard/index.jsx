import React from "react";
import {
  Container,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
  CardImage,
  CardText,
  Title
} from "./styles";

import image1 from "../../Assets/Images/Medicine-bro.png";
import image2 from "../../Assets/Images/First aid kit-bro.png";


export default function Dashboard() {
  return (
    <Container>
      <Title>
        Escolha uma opção!
      </Title>
      <CardContainer>
        <Card to="/Scheduling">
          <CardContent>
            <CardImage src={image1} />
            <CardText>
              Escolha esta opções para explorar o agendamento de novas consultas.
            </CardText>
          </CardContent>
          <CardTitle>Agendamento</CardTitle>
        </Card>
        <Card to="/Historic">
          <CardContent>
            <CardImage src={image2} />
            <CardText>
              Escolha esta opções para consultar o historico de consultas e
              ultimos exames realizados.
            </CardText>
          </CardContent>
          <CardTitle>Historico de consultas</CardTitle>
        </Card>
      </CardContainer>
    </Container>
  );
}
