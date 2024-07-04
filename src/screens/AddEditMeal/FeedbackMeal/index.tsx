import { ProfileScreenNavigationProp } from "@types/navigation";
import { RouteProp } from "@react-navigation/native";
import { BoldText, Container, CustomImage, Description, Title } from "./style";
import positiveFeedback from "@assets/images/positive-feedback.png";
import negativeFeedback from "@assets/images/negative-feedback.png";
import { Button } from "@components/Button";

type FeedbackMealRouteProp = RouteProp<
  { params: { isHealthy: boolean | null } },
  "params"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: FeedbackMealRouteProp;
};

export function FeedbackMeal({ navigation, route }: Props) {
  const { isHealthy } = route.params;

  return (
    <Container>
      <Title isHealthy={isHealthy}>
        {isHealthy ? "Continue assim!" : "Que pena!"}
      </Title>
      <Description>
        {isHealthy ? (
          <>
            Você continua <BoldText>dentro da dieta</BoldText>. Muito bem!
          </>
        ) : (
          <>
            Você <BoldText>saiu da dieta</BoldText> dessa vez, mas continue se
            esforçando e não desista!
          </>
        )}
      </Description>
      <CustomImage source={isHealthy ? positiveFeedback : negativeFeedback} />
      <Button
        text="Ir para a página inicial"
        size="auto"
        onPress={() => navigation.navigate("Home")}
      />
    </Container>
  );
}
