import { IMAGES } from "../../../assets/images";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text, View } from "react-native";
import { FONTS } from "../../../constants/fonts";
import React from "react";

export default ({ header, desc, imageLink = IMAGES.METHOD_DELEVER, method = "Deliver", onPress }) => {
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }} onPress={onPress}>
      <View>
        <Image source={imageLink} style={{ height: 25, width: 25, marginRight: 5 }} />
      </View>
      <View>
        <Text style={{ fontFamily: FONTS.MEDIUM, fontSize: 15 }}>
          {method}
        </Text>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={{ fontFamily: FONTS.MEDIUM, fontSize: 13, color: "#03b9aa" }}>
          Change
        </Text>

      </View>
    </TouchableOpacity>
  );
};
