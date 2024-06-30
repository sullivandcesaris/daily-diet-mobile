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
}

export function Button({ text, icon, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {icon && <Icon name={icon} type={type} />}
      <ButtonText type={type}>{text}</ButtonText>
    </Container>
  );
}
