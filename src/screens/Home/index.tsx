import React, { useState, useEffect } from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import axios from 'axios';

import { Percent } from '@components/Percent';

import logo from '@assets/images/logo.png';
import { Avatar, Container, ContainerInfo, ContainerList, Content, DateInfo, Header, Label, OptionCircle, StringDate, TitleInfo } from "./styles";
import { Button } from '@components/Button';

export interface Meals {
  [date: string]: {
    horario: string;
    nomeComida: string;
    saudavel: boolean;
  }[];
}

const cardapioSemana: Meals = {
  "13/07/23": [
    {
      horario: "08:00",
      nomeComida: "Aveia com frutas",
      saudavel: true,
    },
    {
      horario: "12:30",
      nomeComida: "Salada de legumes",
      saudavel: true,
    },
    {
      horario: "15:00",
      nomeComida: "Biscoitos recheados",
      saudavel: false,
    },
    {
      horario: "19:00",
      nomeComida: "Peixe grelhado com legumes",
      saudavel: true,
    },
    {
      horario: "22:00",
      nomeComida: "Sorvete",
      saudavel: false,
    },
  ],
  "14/07/23": [
    {
      horario: "07:30",
      nomeComida: "Iogurte com granola",
      saudavel: true,
    },
    {
      horario: "12:00",
      nomeComida: "Frango assado com batata-doce",
      saudavel: true,
    },
    {
      horario: "15:30",
      nomeComida: "Bolacha de arroz com queijo",
      saudavel: false,
    },
    {
      horario: "20:00",
      nomeComida: "Hambúrguer e batatas fritas",
      saudavel: false,
    },
  ],
};

export function Home() {
  const [informacoesUsuario, setInformacoesUsuario] = useState(null);

  // Função para buscar informações do usuário no GitHub
  async function buscarInformacoesUsuario(username: string) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error.message);
      return null;
    }
  }

  useEffect(() => {
    buscarInformacoesUsuario('sullivandcesaris')
      .then((data) => {
        setInformacoesUsuario(data);
      });
  }, []);

  const renderItem = ({ item }: { item: { data: string, cardapioDiaList: Refeicao[] } }) => (
    <ContainerList>
      <StringDate>{item.data}</StringDate>
      {item.cardapioDiaList.map((refeicao, indiceCardapioDia) => (
        <ContainerInfo key={indiceCardapioDia}>
          <DateInfo>{refeicao.horario}</DateInfo>
          <TitleInfo>{refeicao.nomeComida}</TitleInfo>
          <Text>
            {refeicao.saudavel ? <OptionCircle type={true} /> : <OptionCircle type={false} />}
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
          <Avatar
            source={{ uri: informacoesUsuario.avatar_url }}
          />
        )}
      </Header>
      <Percent meals={cardapioSemana} />
      <Content>
        <View>
          <Label>Refeições</Label>
          <Button icon='add' text='Nova refeição' />
        </View>
        {cardapioSemana && (
          <FlatList
            data={Object.entries(cardapioSemana)
              .map(([data, cardapioDiaList]) => ({ data, cardapioDiaList }))
              .reverse()} // Aqui, usamos o método reverse() para inverter a ordem dos itens
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
      </Content>
    </Container>
  );
}
