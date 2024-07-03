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

export const StyledInput = styled.TextInput`
  width: 100%;
  padding-vertical: 10px;
  padding-horizontal: 15px;
  border-color: #ccc;
  border-width: 1px;
  border-radius: 5px;
`;