import { Image, ImageBackground, Text, View } from "react-native";
import CircleButton from "../../buttons/CircleButton";
import Button from "../../buttons/Button";
import { FONTS } from "../../../constants/fonts";
import ButtonBar from "../../buttons/ButtonBar";
import ButtonBarWithImage from "../../buttons/ButtonBarWithImage";
import React from "react";
import { IMAGES } from "../../../assets/images";
import { COLORS } from "../../../constants/colors";

export default ({onPressSearch,onPressAccount,showSearch=true}) => {
  return(
    <View
      style={{
        height: 60,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 20,
        paddingVertical: 10,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth:1,
        borderBottomColor:COLORS.GRAY_HIGH
      }}>
      <Image
        source={IMAGES.HEADER_LOGO}
        style={{ height: 25, width: 100, resizeMode: "contain" }}
      />
      {!!showSearch && <Button icon={"search"} text={""} onPress={onPressSearch} />}
      <Button
        onPress={onPressAccount}
        icon={"user"}
        text={"Account"}
        styles={{ marginLeft: "auto" }}
      />
    </View>
  );
}
