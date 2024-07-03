import { TextInput } from "react-native";
import styled from "styled-components/native";

const getWidth = (size?: "lg" | "md" | "sm" | "auto") => {
  switch (size) {
    case "lg":
      return "100%";
    case "md":
      return "50%";
    case "sm":
      return "25%";
    case "auto":
      return "auto";
    default:
      return "auto";
  }
};

export const Container = styled.View<{ size?: "lg" | "md" | "sm" | "auto" }>`
  width: ${({ size }) => getWidth(size)};
  margin: 0 8px;
`;
export const Label = styled.Text`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledTextInput = styled(TextInput)`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  ${({ multiline }) => multiline && `text-align-vertical: top;`}
`;
