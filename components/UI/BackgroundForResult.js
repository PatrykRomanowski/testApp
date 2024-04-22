import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

import MoreIcon from "./MoreIcon";

import HoleDiameterText from "./HoleDiameterText";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BackgroundForResult = (props) => {
  return (
    <View style={styles.resultContainer}>
      {props.actualOption === 1 ? (
        <>
          <HoleDiameterText
            data={props.data}
            index={props.index}
            description="DRILL SIZE"
            type="drillHole"
            unit={props.unit}
            actualOption={props.actualOption}
          />
          <HoleDiameterText
            index={props.index}
            data={props.data}
            description="HOLE AFTER THEARDING"
            type="holeAfterThreadingOrBoltDiameter"
            unit={props.unit}
            actualOption={props.actualOption}
          />
        </>
      ) : (
        <>
          <HoleDiameterText
            data={props.data}
            index={props.index}
            description="THEARD HEIGHT"
            type="boltDiameter"
            unit={props.unit}
            actualOption={props.actualOption}
          />
          <HoleDiameterText
            index={props.index}
            data={props.data}
            description="BOLT SIZE BEFORE THEARDING"
            type="holeAfterThreadingOrBoltDiameter"
            unit={props.unit}
            actualOption={props.actualOption}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    width: screenWidth * 0.96,
    height: screenHeight * 0.3,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#1B84E6",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default BackgroundForResult;
