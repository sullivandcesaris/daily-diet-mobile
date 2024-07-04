import { styled } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Header = styled.View`
  gap: 8px;
  padding: 52px 24px 8px 24px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const IconPressable = styled.TouchableOpacity`
  position: absolute;
  top: 54px;
  left: 24px;
`;

export const Icon = styled(MaterialIcons)`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL2};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
  flex: 1;
  gap: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 48px 24px 24px 24px;
  border-radius: 16px 16px 0 0;
  justify-content: space-between;
`;

export const FormContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const VStack = styled.View`
  flex-direction: row;
  justify-content: start;
  gap: 16px;
  padding: 0px 20px;
`;
