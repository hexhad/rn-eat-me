import { Modal, Pressable, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import Icon from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import { RootNavigation } from "../../../navigation/rootNavigation";
import { SCREEN_NAMES } from "../../../constants/screens";

export default ({ visible = false ,setVisibility}) => {
  const navigateToLocation = () => {
    RootNavigation.navigate(SCREEN_NAMES.DELIVERY_MODAL);
    setVisibility(false);
  }
  return (
    <Modal {...{ visible, transparent: true }}>
      <TouchableWithoutFeedback onPress={() => setVisibility(false)}>
        <View style={{flex:1,
          backgroundColor:COLORS.BLACK_LOW}}>
        <TouchableWithoutFeedback onPress={() => console.log("inside")}>
          <View style={{ marginTop: "auto", padding: 10, backgroundColor: COLORS.WHITE }}>
            <TouchableOpacity
              onPress={navigateToLocation}
              style={{ backgroundColor: COLORS.WHITE, flexDirection: "row", justifyContent: "center", alignItems: "center", paddingVertical: 10, borderRadius: 3, marginBottom: 10 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Icon name={"map-pin"} size={18} color={COLORS.GRAY_HIGH} />
              </View>
              <View style={{ flex: 8 }}>
                <Text style={{ fontFamily: FONTS.MEDIUM, color: COLORS.BLACK, fontSize: 14 }}>St. James</Text>
                <Text style={{ fontFamily: FONTS.REGULAR, color: COLORS.BLACK, fontSize: 14 }}>London</Text>
              </View>
              <View style={{ flex: 3, marginRight: 10 }}>
                <Text
                  style={{ fontFamily: FONTS.MEDIUM, color: COLORS.APP_MAIN_COLOR, fontSize: 14, textAlign: "right" }}>Change</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setVisibility(false)}
              style={{ backgroundColor: COLORS.APP_MAIN_COLOR, justifyContent: "center", alignItems: "center", paddingVertical: 10, borderRadius: 3 }}>
              <Text style={{ fontFamily: FONTS.REGULAR, color: COLORS.WHITE, fontSize: 14 }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>

    </Modal>
  );
}
