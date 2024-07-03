import React from "react";
import { Container, Label, StyledTextInput } from "./style";
import { TextInputProps } from "react-native";

interface InputTextProps extends TextInputProps {
  label: string;
  size?: "auto" | "lg" | "md" | "sm";
}

export function InputText({
  label,
  placeholder,
  keyboardType = "default",
  size = "lg",
  ...props
}: InputTextProps) {
  return (
    <Container size={size}>
      <Label>{label}</Label>
      <StyledTextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...props}
      />
    </Container>
  );
}
