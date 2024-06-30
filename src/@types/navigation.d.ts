import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: { userId: string };
  Profile: { userId: string };
};

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;
export type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;
