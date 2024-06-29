import { css, styled } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonIconTypeStyleProps
}

export const Container = styled.TouchableOpacity<Props>`
  max-height: 70px;
  padding: 24px 16px;
  margin: 4px 0;
  ${({theme, type}) => 
  type === 'SECONDARY' ? 'border: 2px solid ' + theme.COLORS.GRAY_600 : ''};
  border-radius: 12px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 4px;

  /* Utilize a interpolação para aplicar a condicional */
  background-color: ${({ theme, type }) => type === 'PRIMARY' 
    ? theme.COLORS.GRAY_600
    : theme.COLORS.WHITE};
`;

export const ButtonText = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'PRIMARY' 
    ? theme.COLORS.WHITE
    : theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};

    justify-content: center;
    align-items: center;
  `}
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 14,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE  : theme.COLORS.GRAY_600
}))``