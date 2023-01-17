import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../components/text/Text";
import PlanetHeader from "../components/PlanetHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";

export default function PlanetDetailsScreen({ route }) {
    const { planet } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn />
      <Text preset="h1">{planet?.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
