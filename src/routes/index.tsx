import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddEditMeal } from "@screens/AddEditMeal";
import { FeedbackMeal } from "@screens/AddEditMeal/FeedbackMeal";
import { Home } from "@screens/Home";
import { Stats } from "@screens/Stats";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Stats"
          component={Stats}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddEditMeal"
          component={AddEditMeal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FeedbackMeal"
          component={FeedbackMeal}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
