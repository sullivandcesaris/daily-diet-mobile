import { useState } from "react";
import { RouteProp } from "@react-navigation/native";
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

type FeedbackMealRouteProp = RouteProp<
  {
    params: {
      isHealthy?: boolean | null;
      edit?: boolean;
      name?: string;
      description?: string;
      date?: string;
      hour?: string;
    };
  },
  "params"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: FeedbackMealRouteProp;
};

export function AddEditMeal({ navigation, route }: Props) {
  const [isHealthy, setIsHealthy] = useState<boolean | null>(
    route.params?.isHealthy ?? null,
  );
  const [name, setName] = useState<string>(route.params?.name ?? "");
  const [description, setDescription] = useState<string>(
    route.params?.description ?? "",
  );
  const [date, setDate] = useState<string>(route.params?.date ?? "");
  const [hour, setHour] = useState<string>(route.params?.hour ?? "");

  const edit = route.params?.edit ?? false;

  const handleSubmit = () => {
    navigation.navigate("FeedbackMeal", { isHealthy });
  };

  return (
    <Container>
      <Header>
        <Title>{edit ? "Editar refeição" : "Nova refeição"}</Title>
        <IconPressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
        </IconPressable>
      </Header>
      <Content>
        <FormContainer>
          <InputText label="Nome" value={name} onChangeText={setName} />
          <InputText
            label="Descrição"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
          <VStack>
            <InputDateTime label="Data" size="md" initialValue={date} />
            <InputDateTime
              label="Hora"
              type="time"
              size="md"
              initialValue={hour}
            />
          </VStack>
          <CheckButton
            label="Está dentro da dieta?"
            setActiveButton={setIsHealthy}
            isActive={isHealthy}
          />
        </FormContainer>
        <Button
          text={edit ? "Salvar alterações" : "Cadastrar refeição"}
          onPress={handleSubmit}
        />
      </Content>
    </Container>
  );
}
