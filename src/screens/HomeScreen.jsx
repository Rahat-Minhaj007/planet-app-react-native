import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Text from "../components/text/Text";
import { colors } from "../theme/colors";
import PlanetHeader from "../components/PlanetHeader";
import { PLANET_LIST } from "../mocks/planetListData";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const renderItem = (item) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("PlanetDetails", { planet: item })}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.singleItem}>
            <View style={[styles.circle, { backgroundColor: item?.color }]} />
            <Text preset="h3" style={styles.singleItemName}>
              {item?.name}
            </Text>
          </View>
          <AntDesign name="right" size={20} color={colors.white} />
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        data={PLANET_LIST}
        contentContainerStyle={styles.fullList}
        keyExtractor={(item) => item?.name}
        renderItem={({ item }) => renderItem(item)}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  fullList: {
    padding: spacing[3],
  },
  singleItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: spacing[3],
    paddingBottom: spacing[3],
  },
  singleItemName: {
    textTransform: "uppercase",
    marginLeft: spacing[3],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
  },
});
