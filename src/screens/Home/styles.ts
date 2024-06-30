import { styled } from "styled-components/native";

interface CircleProps {
  type: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 48px 24px 0px 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
  gap: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0;
  gap: 8px;
`;

export const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 50px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;

export const StringDate = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;

export const ContainerList = styled.View`
  margin: 14px 0;
`;

export const ContainerInfo = styled.View`
  margin: 4px 0;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const DateInfo = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  padding-right: 8px;
  border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const TitleInfo = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  flex: 1;
`;

export const OutInfoStatus = styled.Text`
  justify-content: center;
  align-items: center;
`;
export const OptionCircle = styled.View<CircleProps>`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${({ theme, type }) =>
    type === true ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};
`;
