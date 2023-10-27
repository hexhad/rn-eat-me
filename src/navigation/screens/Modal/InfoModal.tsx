import React, { useRef } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootNavigation } from "../../rootNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import { FONTS } from "../../../constants/fonts";
import { COLORS } from "../../../constants/colors";
import HeaderWithClose from "../../../components/headers/HeaderWithClose";
const InfoModal = (): JSX.Element => {

  const scrollRef = useRef();
  return (
    <SafeAreaView>
      <View>
          <HeaderWithClose  titile={'Info'}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default InfoModal;
