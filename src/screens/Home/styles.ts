import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_500 };
  padding-top: 48px;
`

export const Title = styled.Text`
  font-family: 'NunitoSans_600SemiBold';
  font-size: 32px;
`