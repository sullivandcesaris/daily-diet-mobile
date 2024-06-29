import { Meals } from "@screens/Home";
import { Container, Description, Icon, Title } from "./styles";

interface PercentProps {
  meals: Meals;
}

export function Percent({ meals }: PercentProps) {

  // Calcular a porcentagem de refeições saudáveis
  const calculatePercentage = () => {
    let totalMeals = 0;
    let healthyMeals = 0;

    // Iterar sobre cada dia no cardápio
    Object.values(meals).forEach((dayMeals) => {
      totalMeals += dayMeals.length;
      dayMeals.forEach((meal) => {
        if (meal.saudavel) {
          healthyMeals++;
        }
      });
    });

    // Calcular a porcentagem
    const percentage = (healthyMeals / totalMeals) * 100;
    return percentage.toFixed(2); // Arredonda para duas casas decimais
  };

  const percentage = parseFloat(calculatePercentage());

  return (
    <Container percentage={percentage}>
      <Title>{percentage}%</Title>
      <Description>das refeições dentro da dieta são saudáveis</Description>
      <Icon percentage={percentage} name="call-made" />
    </Container>
  )
}