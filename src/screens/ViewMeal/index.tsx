import { RouteProp } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from "@types/navigation";
import { Modal, Text, View } from "react-native";
import {
  ButtonContainer,
  Circle,
  Container,
  Content,
  Description,
  Header,
  Icon,
  IconPressable,
  InfoContainer,
  InfoHealthy,
  InfoTitle,
  ModalContainer,
  ModalOverlay,
  ModalText,
  Title,
} from "./style";
import { Button } from "@components/Button";
import { useState } from "react";

type FeedbackMealRouteProp = RouteProp<
  {
    params: {
      meal: {
        hour: string;
        name: string;
        description: string;
        healthy: boolean;
      };
      item: { data: string };
    };
  },
  "params"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: FeedbackMealRouteProp;
};

export function ViewMeal({ navigation, route }: Props) {
  const { hour, name, description, healthy } = route.params.meal;
  const date = route.params.item.data;

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  function handleEdit() {
    navigation.navigate("AddEditMeal", {
      edit: true,
      name: name,
      hour: hour,
      description: description,
      isHealthy: healthy,
      date: date,
    });
  }

  function handleRemove() {
    return;
  }

  return (
    <Container healthy={healthy}>
      <Header>
        <Title>Refeição</Title>
        <IconPressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
        </IconPressable>
      </Header>
      <Content>
        <InfoContainer>
          <View>
            <InfoTitle>{name}</InfoTitle>
            <Description>{description}</Description>
          </View>
          <View>
            <Title>Data e hora</Title>
            <Description>
              {date} às {hour}
            </Description>
          </View>
          <InfoHealthy>
            {healthy ? (
              <>
                <Circle color="green" />
                <Text>dentro da dieta</Text>
              </>
            ) : (
              <>
                <Circle color="red" />
                <Text>fora da dieta</Text>
              </>
            )}
          </InfoHealthy>
        </InfoContainer>
        <View>
          <Button icon="edit" text="Editar refeição" onPress={handleEdit} />
          <Button
            icon="delete"
            type="SECONDARY"
            text="Excluir refeição"
            onPress={openModal}
          />
        </View>
      </Content>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <ModalOverlay>
          <ModalContainer>
            <ModalText>
              Deseja realmente excluir o registro da refeição?
            </ModalText>
            <ButtonContainer>
              <Button
                size="sm"
                type="SECONDARY"
                text="Cancelar"
                onPress={closeModal}
              />
              <Button size="sm" text="Sim, excluir" onPress={handleRemove} />
            </ButtonContainer>
          </ModalContainer>
        </ModalOverlay>
      </Modal>
    </Container>
  );
}
