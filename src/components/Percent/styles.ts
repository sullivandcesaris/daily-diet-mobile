import { styled } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View<{ percentage: number }>`
  background-color: ${({ theme, percentage }) =>
    percentage >= 50 ? theme.COLORS.GREEN_300 : theme.COLORS.RED_500};
  margin: 12px 0 20px 0;
  padding: 20px;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD };
  font-size: ${({ theme }) => theme.FONT_SIZE.XL3 };
  color: ${({ theme }) => theme.COLORS.GRAY_700 };
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
  font-size: ${({ theme }) => theme.FONT_SIZE.MD };
  color: ${({ theme }) => theme.COLORS.GRAY_600 };
` 

export const Icon = styled(MaterialIcons)<{ percentage: number }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL2 };
  color: ${({ theme, percentage }) =>
    percentage >= 50 ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  position: absolute;
  top: 2px;
  right: 2px;
`