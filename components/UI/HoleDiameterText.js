import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MoreIcon from "./MoreIcon";

const HoleDiameterText = (props) => {
  if (props.data.length === 0) {
    return;
  }
  if (props.type === "drillHole" || props.type === "boltDiameter") {
    return (
      <View style={styles.textContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={[styles.description, styles.secondStyle]}>
            {props.description}
          </Text>
          <View style={styles.icon}>
            <MoreIcon />
          </View>
        </View>
        <Text style={styles.result}>
          {props.actualOption === 1
            ? props.data[props.index - 1].hole_d
            : props.data[props.index - 1].Th_d}
        </Text>
        <Text style={styles.description}>[{props.unit}]</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.description}>{props.description}</Text>
        </View>
        <Text style={styles.result}>
          {props.data[props.index - 1].min} - {props.data[props.index - 1].max}
        </Text>
        <Text style={styles.description}>[{props.unit}]</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  textContainer: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    marginTop: 6,
  },
  icon: {
    alignSelf: "flex-end",
  },
  description: {
    fontFamily: "Inter_600SemiBold",
    color: "white",
  },
  secondStyle: {
    flexGrow: 1,
    paddingLeft: 40,
    textAlign: "center",
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  result: {
    // marginTop: 10,
    fontSize: 40,
    fontFamily: "Inter_800ExtraBold",
    color: "white",
  },
});

export default HoleDiameterText;
