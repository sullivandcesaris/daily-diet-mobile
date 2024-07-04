import { TextInput, TouchableOpacity } from "react-native";
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
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const StyledTextInput = styled(TextInput)`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  ${({ multiline }) => multiline && `text-align-vertical: top;`}
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const YesButton = styled(TouchableOpacity)<{ active: boolean }>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  margin: 5px;
  background-color: ${({ active, theme }) =>
    active ? theme.COLORS.GREEN_300 : theme.COLORS.GRAY_200};
  border: 1px solid ${({ active, theme }) =>
    active ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_300};
  border-radius: 4px;
`;

export const NoButton = styled(TouchableOpacity)<{ active: boolean }>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  margin: 5px;
  background-color: ${({ active, theme }) =>
    active ? theme.COLORS.RED_300 : theme.COLORS.GRAY_200};
  border: 1px solid ${({ active, theme }) =>
    active ? theme.COLORS.RED_700 : theme.COLORS.GRAY_300};
  border-radius: 4px;
`;

export const ButtonText = styled.Text<{ active: boolean }>`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-weight: bold;
`;

export const Circle = styled.View<{ color: "green" | "red" }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ color, theme }) =>
    color === "green" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  margin-right: 8px;
`;
