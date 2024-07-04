import { styled } from "styled-components/native";

interface Props {
  isHealthy: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL2};
  color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  text-align: center;
  line-height: ${({ theme }) => theme.FONT_SIZE.XL2};
`;

export const CustomImage = styled.Image`
  margin: 24px 0;
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
