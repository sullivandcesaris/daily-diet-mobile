import { styled } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

interface isHealthy {
  healthy: boolean;
}

export const Container = styled.View<isHealthy>`
  flex: 1;
  gap: 16px;
  background-color: ${({ theme, healthy }) =>
    healthy ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
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

export const InfoContainer = styled.View`
  flex: 1;
  gap: 24px;
`;

export const InfoTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL2};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  line-height: ${({ theme }) => theme.FONT_SIZE.XL2};
`;

export const Circle = styled.View<{ color: "green" | "red" }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ color, theme }) =>
    color === "green" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  margin-right: 8px;
`;

export const InfoHealthy = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 8px 16px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  align-self: flex-start;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 0 24px;
  align-items: center;
`;

export const ModalText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 20px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;
