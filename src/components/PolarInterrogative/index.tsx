import { useState } from "react";
import { Text, View } from "react-native"
import { Container, Content, TrueRadio, FalseRadio, OptionCircle, ContentRadio, TextLabel } from "./styles";

interface PolarInterrogativeProps {
  text: string;
}

export function PolarInterrogative({text}: PolarInterrogativeProps){
  const [selectedOption, setSelectedOption] = useState<boolean | undefined>(undefined);
  return (
    <Container>
      <TextLabel>{text}</TextLabel>

      <Content>
        <TrueRadio selected={selectedOption} onPress={() => setSelectedOption(true)}>
          <ContentRadio>
            <OptionCircle type={true} />
            <TextLabel>Sim</TextLabel>
          </ContentRadio>
        </TrueRadio>
        <FalseRadio selected={selectedOption} onPress={() => setSelectedOption(false)}>
          <ContentRadio>
            <OptionCircle type={false} />
            <TextLabel>Não</TextLabel>
          </ContentRadio>
        </FalseRadio>
      </Content>
    </Container>
  )
}