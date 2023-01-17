import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import Text from "../components/text/Text";
import PlanetHeader from "../components/PlanetHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";

const PlanetContent = ({ title, value }) => {
  return (
    <View style={styles.planetContent}>
      <Text preset="small" style={{ textTransform: "uppercase" }}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function PlanetDetailsScreen({ route }) {
  const { planet } = route.params;
  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "venus":
        return <VenusSvg />;
      case "earth":
        return <EarthSvg />;
      case "mars":
        return <MarsSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "neptune":
        return <NeptuneSvg />;
      default:
        return <Text preset="h3">There is no Svg</Text>;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn />
      <ScrollView>
        <View style={styles.imageView}>{renderImage(planet?.name)}</View>

        <View style={styles.detailsView}>
          <Text preset="h3" style={styles.name}>
            {planet?.name}
          </Text>
          <Text style={styles.description}>{planet?.description}</Text>
          <Pressable style={styles.source}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>

        <View style={{ marginTop: spacing[4] }}>
          <PlanetContent title="Rotation Time" value={planet?.rotationTime} />
          <PlanetContent
            title="Revolution Time"
            value={planet?.revolutionTime}
          />
          <PlanetContent title="Radius" value={planet?.radius} />
          <PlanetContent title="Average Temperature" value={planet?.avgTemp} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    marginTop: spacing[3],
    justifyContent: "center",
    alignItems: "center",
  },
  detailsView: {
    marginTop: spacing[5],
    marginHorizontal: spacing[3],
    alignItems: "center",
  },
  name: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginTop: spacing[3],
    lineHeight: 20,
  },
  source: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[4],
  },
  wikipedia: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  planetContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[3],
    borderWidth: 0.2,
    borderColor: colors.grey,
    marginHorizontal: spacing[3],
    marginVertical: spacing[2],
  },
});
