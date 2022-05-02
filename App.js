import AppLoading from "expo-app-loading";
import { View } from "react-native";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/dev";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";
import Header from "./shared/Header";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} />,
            };
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} />,
            };
          }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: "Review Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
