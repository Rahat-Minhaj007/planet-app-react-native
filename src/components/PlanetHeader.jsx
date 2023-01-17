import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import Text from "./text/Text";
import { spacing } from "./../theme/spacing";
import { colors } from "../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backBtn }) {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          style={{ marginRight: spacing[3] }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={20} color={colors.white} />
        </Pressable>
      )}
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[3],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.grey,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
