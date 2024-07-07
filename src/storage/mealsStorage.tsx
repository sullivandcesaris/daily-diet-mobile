export interface MealInterface {
  [date: string]: {
    hour: string;
    name: string;
    description: string;
    healthy: boolean;
  }[];
}

export const Meals: MealInterface = {
  "13/07/2023": [
    {
      hour: "08:00",
      name: "Aveia com frutas",
      description: "Aveia com frutas variadas",
      healthy: true,
    },
    {
      hour: "12:30",
      name: "Salada de legumes",
      description: "Salada de legumes frescos",
      healthy: true,
    },
    {
      hour: "15:00",
      name: "Biscoitos recheados",
      description: "Biscoitos recheados com chocolate",
      healthy: false,
    },
    {
      hour: "19:00",
      name: "Peixe grelhado com legumes",
      description: "Peixe grelhado acompanhado de legumes",
      healthy: true,
    },
    {
      hour: "22:00",
      name: "Sorvete",
      description: "Sorvete de baunilha",
      healthy: false,
    },
  ],
  "14/07/2023": [
    {
      hour: "07:30",
      name: "Iogurte com granola",
      description: "Iogurte natural com granola",
      healthy: true,
    },
    {
      hour: "12:00",
      name: "Frango assado com batata-doce",
      description: "Frango assado acompanhado de batata-doce",
      healthy: true,
    },
    {
      hour: "15:30",
      name: "Bolacha de arroz com queijo",
      description: "Bolacha de arroz com queijo",
      healthy: false,
    },
    {
      hour: "20:00",
      name: "Hambúrguer e batatas fritas",
      description: "Hambúrguer com batatas fritas",
      healthy: false,
    },
  ],
};
