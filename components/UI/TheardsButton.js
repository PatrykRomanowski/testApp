import React, { useState } from "react";
import { Pressable, View, StyleSheet, Text, Image } from "react-native";

const theardInside = require("../../assets/T1.png");
const theardOutside = require("../../assets/T2.png");

const TheardsButton = (props) => {
  const onPressButtonHandler = () => {
    props.onPress(props.id);
  };

  return (
    <Pressable
      style={[
        styles.button,
        props.id === props.actualOption ? styles.buttonActive : null,
      ]}
      onPress={onPressButtonHandler}
    >
      {props.buttonType === "unit" ? null : (
        <View style={styles.imgContainer}>
          {props.id === 1 ? (
            <Image style={styles.img} source={theardInside} />
          ) : (
            <Image style={styles.img} source={theardOutside} />
          )}
        </View>
      )}
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: "47%",
    height: "84%",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    width: "50%",
  },
  buttonActive: {
    backgroundColor: "#1B84E6",
  },
  imgContainer: {
    width: "30%",
    alignItems: "flex-start",
  },
  img: {
    width: "80%",
    height: "80%",
  },
});

export default TheardsButton;
