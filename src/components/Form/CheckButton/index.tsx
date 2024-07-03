import React, { useState } from "react";
import {
  Container,
  Label,
  ButtonRow,
  YesButton,
  NoButton,
  ButtonText,
  Circle,
} from "./style";
import { TextInputProps } from "react-native";

interface InputTextProps extends TextInputProps {
  label: string;
  size?: "auto" | "lg" | "md" | "sm";
}

export function CheckButton({ label, size = "lg", ...props }: InputTextProps) {
  const [activeButton, setActiveButton] = useState<boolean | null>(null);

  return (
    <Container size={size}>
      <Label>{label}</Label>
      <ButtonRow>
        <YesButton
          active={activeButton === true}
          onPress={() => setActiveButton(true)}
        >
          <Circle color="green" />
          <ButtonText active={activeButton === true}>Sim</ButtonText>
        </YesButton>
        <NoButton
          active={activeButton === false}
          onPress={() => setActiveButton(false)}
        >
          <Circle color="red" />
          <ButtonText active={activeButton === false}>Não</ButtonText>
        </NoButton>
      </ButtonRow>
    </Container>
  );
}
