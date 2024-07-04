import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  ButtonText,
  Icon,
  ButtonIconTypeStyleProps,
} from "./styles";

interface ButtonProps {
  text: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
  size?: "lg" | "md" | "sm" | "auto";
  onPress?: () => void;
}

export function Button({
  text,
  icon,
  type = "PRIMARY",
  onPress,
  size = "lg",
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} onPress={onPress} size={size} {...rest}>
      {icon && <Icon name={icon} type={type} />}
      <ButtonText type={type}>{text}</ButtonText>
    </Container>
  );
}
