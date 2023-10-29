import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { FONTS } from "../../../constants/fonts";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

export default ({ header, desc, icon, mainColor = "#2e3333", onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
      <View>
        <Icon name={icon} size={20} color={mainColor} style={{ marginRight: 10 }} />
      </View>
      <View>
        <Text style={{ fontFamily: FONTS.MEDIUM, fontSize: 15, color: mainColor }}>
          {header}
        </Text>
        <Text style={{ fontFamily: FONTS.LIGHT, fontSize: 13 }}>
          {desc}
        </Text>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Icon name={"chevron-right"} size={20} color="#03b9aa" />
      </View>
    </TouchableOpacity>
  );
};
