import { styled } from "styled-components/native";

interface RadioProps {
  selected?: boolean;
}

interface CircleProps {
  type: boolean
}

export const Container = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  gap: 8px;
`

export const Content = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const TextLabel = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const TrueRadio = styled.TouchableOpacity<RadioProps>`
  ${({ theme, selected }) => 
    selected === true 
    ? 'background-color: '+theme.COLORS.GREEN_300  
    : 'background-color: '+theme.COLORS.GRAY_200 
  };
  ${({ theme, selected }) => 
    selected === true 
    ? 'border: 1px solid '+theme.COLORS.GREEN_700 
    : '' 
  };
  flex: 1;
  padding: 16px;
  border-radius: 8px;
`

export const FalseRadio = styled.TouchableOpacity<RadioProps>`
  
  ${({ theme, selected }) => 
    selected === false 
    ? 'background-color: '+theme.COLORS.RED_300  
    : 'background-color: '+theme.COLORS.GRAY_200 
  };

  ${({ theme, selected }) => 
    selected === false 
    ? 'border: 1px solid '+theme.COLORS.RED_700 
    : '' 
  };
  flex: 1;
  padding: 16px;
  border-radius: 8px;
`

export const ContentRadio = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const OptionCircle = styled.View<CircleProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme, type }) => 
    type === true 
    ? theme.COLORS.GREEN_700 
    : theme.COLORS.RED_700
  };
`