
export interface Meals {
    [date: string]: {
      horario: string;
      nomeComida: string;
      saudavel: boolean;
    }[];
}
  
export const Meals: Meals = {
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


  export const MealsOff: Meals = {
    "13/07/23": [
      {
        horario: "08:00",
        nomeComida: "Aveia com frutas",
        saudavel: true,
      },
      {
        horario: "12:30",
        nomeComida: "Salada de legumes",
        saudavel: false,
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