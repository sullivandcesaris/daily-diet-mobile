import { styled } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View<{ percentage: number }>`
  flex: 1;
  gap: 16px;
  background-color: ${({ theme, percentage }) =>
    percentage >= 50 ? theme.COLORS.GREEN_300 : theme.COLORS.RED_500};
`

export const Header = styled.View`
  gap: 8px;
  padding: 72px 24px 34px 24px;
  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  flex: 1;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 48px 24px 0px 24px;
  border-radius: 16px 16px 0 0;
  align-items: center;
`

export const IconPressable = styled.TouchableOpacity`
  position: absolute;
  top: 54px;
  left: 24px;
`

export const Icon = styled(MaterialIcons) <{ percentage: number }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL2};
  color: ${({ theme, percentage }) =>
    percentage >= 50 ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL3};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const SubTitle = styled.Text`
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
font-size: ${({ theme }) => theme.FONT_SIZE.LG};
color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const HStack = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`

export const CardStats = styled.View<{ 
    type?: 'default' | 'success' | 'error', 
    width?: 'full' | 'half' 
  }>`
  width: ${({ width }) => (width === 'half' ? '48%' : '100%')};
  padding: 16px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return theme.COLORS.GREEN_300;
      case 'error':
        return theme.COLORS.RED_300;
      default:
        return theme.COLORS.GRAY_200;
    }
  }};
  border-radius: 8px;
  align-items: center;
  margin: 0;
  gap: 8px;
`;

export const CardStatsTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL2};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`