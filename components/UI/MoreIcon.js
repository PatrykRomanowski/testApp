import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { modalActions } from "../../storage/modal-context";
import { useDispatch } from "react-redux";

const MoreIcon = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Ionicons
        onPress={() => {
          console.log("click!!!");
          dispatch(modalActions.showModal());
        }}
        name="apps-outline"
        size={30}
        color="white"
        style={{ paddingRight: 10 }}
      />
    </>
  );
};

export default MoreIcon;
