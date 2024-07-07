import React, { useState, useEffect } from "react";
import { Image, Text, View, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import { Percent } from "@components/Percent";
import logo from "@assets/images/logo.png";
import {
  Avatar,
  Container,
  ContainerInfo,
  ContainerList,
  Content,
  DateInfo,
  Header,
  Label,
  OptionCircle,
  StringDate,
  TitleInfo,
} from "./styles";
import { Button } from "@components/Button";
import { ProfileScreenNavigationProp } from "@types/navigation";
// Temporario
import { Meals } from "@storage/mealsStorage";

interface Meal {
  hour: string;
  name: string;
  description: string;
  healthy: boolean;
}

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export function Home({ navigation }: Props) {
  const [informacoesUsuario, setInformacoesUsuario] = useState(null);

  // Função para buscar informações do usuário no GitHub
  async function buscarInformacoesUsuario(username: string) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error.message);
      return null;
    }
  }

  useEffect(() => {
    buscarInformacoesUsuario("sullivandcesaris").then((data) => {
      setInformacoesUsuario(data);
    });
  }, []);

  const renderItem = ({ item }: { item: { data: string; meals: Meal[] } }) => (
    <ContainerList>
      <StringDate>{item.data}</StringDate>
      {item.meals.map((meal, index) => (
        <ContainerInfo
          key={index}
          onPress={() => navigation.navigate("ViewMeal", { meal, item })}
        >
          <DateInfo>{meal.hour}</DateInfo>
          <TitleInfo>{meal.name}</TitleInfo>
          <Text>
            {meal.healthy ? (
              <OptionCircle type={true} />
            ) : (
              <OptionCircle type={false} />
            )}
          </Text>
        </ContainerInfo>
      ))}
    </ContainerList>
  );

  return (
    <Container>
      <Header>
        <Image source={logo} />
        {informacoesUsuario && (
          <Avatar source={{ uri: informacoesUsuario.avatar_url }} />
        )}
      </Header>
      <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
        <Percent />
      </TouchableOpacity>
      <Content>
        <View>
          <Label>Refeições</Label>
          <Button
            icon="add"
            text="Nova refeição"
            onPress={() => navigation.navigate("AddEditMeal")}
          />
        </View>
        {Meals && (
          <FlatList
            data={Object.entries(Meals)
              .map(([data, meals]) => ({ data, meals }))
              .reverse()}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
      </Content>
    </Container>
  );
}
