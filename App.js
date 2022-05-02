import AppLoading from "expo-app-loading";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/dev";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ReviewDetails from "./screens/ReviewDetails";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "GameZone",
            headerStyle: { backgroundColor: "#eee" },
          }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: "Review Details",
            headerStyle: { backgroundColor: "#eee" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
