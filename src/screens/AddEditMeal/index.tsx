import { ProfileScreenNavigationProp } from "@types/navigation";
import {
  Container,
  Content,
  FormContainer,
  Header,
  Icon,
  IconPressable,
  Title,
  VStack,
} from "./style";
import { Button } from "@components/Button";
import { InputText } from "@components/Form/InputText";
import { InputDateTime } from "@components/Form/InputDateTime";
import { CheckButton } from "@components/Form/CheckButton";

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export function AddEditMeal({ navigation }: Props) {
  return (
    <Container>
      <Header>
        <Title>Nova refeição</Title>
        <IconPressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
        </IconPressable>
      </Header>
      <Content>
        <FormContainer>
          <InputText label="Nome" />
          <InputText label="Descrição" multiline numberOfLines={4} />
          <VStack>
            <InputDateTime label="Data" size="md" />
            <InputDateTime label="Hora" type="time" size="md" />
          </VStack>
          <CheckButton label="Está dentro da dieta?" />
        </FormContainer>
        <Button text="Cadastrar refeição" />
      </Content>
    </Container>
  );
}
