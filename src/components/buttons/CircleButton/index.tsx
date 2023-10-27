import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../../constants/colors";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

export default({ onPress, styles }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
      // padding:10,
      backgroundColor: COLORS.WHITE,
      width: 40,
      height: 40,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      ...styles,
    }}>
      <Icon name={"arrow-left"} size={20} color={COLORS.APP_MAIN_COLOR} />
    </TouchableOpacity>
  );
};
