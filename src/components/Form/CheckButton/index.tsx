import React, { useState, useEffect } from "react";
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

interface CheckButtonProps extends TextInputProps {
  label: string;
  size?: "auto" | "lg" | "md" | "sm";
  setActiveButton: (value: boolean | null) => void;
  isActive: boolean | null; // Adicionando prop para valor inicial
}

export function CheckButton({
  label,
  size = "lg",
  setActiveButton,
  isActive,
  ...props
}: CheckButtonProps) {
  const [activeButton, setActiveButtonState] = useState<boolean | null>(
    isActive,
  );

  useEffect(() => {
    setActiveButtonState(isActive);
  }, [isActive]);

  const handlePress = (value: boolean) => {
    setActiveButtonState(value);
    setActiveButton(value);
  };

  return (
    <Container size={size}>
      <Label>{label}</Label>
      <ButtonRow>
        <YesButton
          active={activeButton === true}
          onPress={() => handlePress(true)}
        >
          <Circle color="green" />
          <ButtonText active={activeButton === true}>Sim</ButtonText>
        </YesButton>
        <NoButton
          active={activeButton === false}
          onPress={() => handlePress(false)}
        >
          <Circle color="red" />
          <ButtonText active={activeButton === false}>Não</ButtonText>
        </NoButton>
      </ButtonRow>
    </Container>
  );
}
