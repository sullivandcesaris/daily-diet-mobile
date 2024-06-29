import { CardStats, CardStatsTitle, Container, Content, Description, Header, HStack, Icon, IconPressable, Title, SubTitle } from "./styles";
import { calculatePercentage, getBestHealthySequence, getHealthyMealsCount, getTotalMeals, getUnhealthyMealsCount } from "@utils/getStatsStorage";

export function Stats({ navigation }) {

    const percentege = calculatePercentage();
    const bestHealthySequence = getBestHealthySequence();
    const totalMeals = getTotalMeals();
    const healthyMealsCount = getHealthyMealsCount();
    const unHealthyMealsCount = getUnhealthyMealsCount();
    return (
        <Container percentage={percentege}>
            <Header>
                <Title>{percentege}%</Title>
                <Description>das refeições dentro da dieta</Description>
                <IconPressable onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" percentage={percentege} />
                </IconPressable>
            </Header>
            <Content>
                <SubTitle>Estatísticas gerais</SubTitle>
                <CardStats>
                    <CardStatsTitle>{bestHealthySequence}</CardStatsTitle>
                    <Description>melhor sequência de pratos dentro da dieta</Description>
                </CardStats>
                <CardStats>
                    <CardStatsTitle>{totalMeals}</CardStatsTitle>
                    <Description>refeições registradas</Description>
                </CardStats>
                <HStack>
                    <CardStats type="success" width="half">
                        <CardStatsTitle>{healthyMealsCount}</CardStatsTitle>
                        <Description>refeições dentro da dieta</Description>
                    </CardStats>
                    <CardStats type="error" width="half">
                        <CardStatsTitle>{unHealthyMealsCount}</CardStatsTitle>
                        <Description>refeições fora da dieta</Description>
                    </CardStats>
                </HStack>
            </Content>
        </Container>

    )
}