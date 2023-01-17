import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/theme/colors";
import { useFonts } from "expo-font";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Text from "./src/components/text/Text";
import HomeScreen from "./src/screens/HomeScreen";
import PlanetDetailsScreen from "./src/screens/PlanetDetailsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
  });

  const Stack = createNativeStackNavigator();

  if (!fontsLoaded) {
    return <Text>Fonts are loading...!</Text>;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PlanetDetails" component={PlanetDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
