import React from "react";
import { Container, Description, Icon, Title } from "./styles";
import { calculatePercentage } from "@utils/getStatsStorage";

export function Percent() {
  const percentage = parseFloat(calculatePercentage());

  return (
    <Container percentage={percentage}>
      <Title>{percentage}%</Title>
      <Description>das refeições dentro da dieta são saudáveis</Description>
      <Icon percentage={percentage} name="call-made" />
    </Container>
  );
}
