import { COLORS } from "../../../constants/colors";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { memo } from "react";

export default memo(({ index, item, place, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container,{backgroundColor: place === index ? COLORS.APP_MAIN_COLOR : COLORS.WHITE,}]}>
      <Text style={{ color: place === index ? COLORS.WHITE : COLORS.APP_MAIN_COLOR }}>{item}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container :{
    width: "auto",
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 100,
  }
})

