import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RootNavigation } from "../../rootNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import { FONTS } from "../../../constants/fonts";
import HeaderWithClose from "../../../components/headers/HeaderWithClose";

const AccountModal = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View>
        <HeaderWithClose titile={"Info"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: "red"
  }
});

export default AccountModal;
