import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RootNavigation } from "../../rootNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import { FONTS } from "../../../constants/fonts";
import HeaderWithSearch from "../../../components/headers/HeaderWithSearch";
import HeaderWithSearchAndButton from "../../../components/headers/HeaderWithSearchAndButton";


const ShippingModal = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View>
        <HeaderWithSearchAndButton
          placeholder={`Enter your full address`}
          onChnageText={(t)=>{
            console.log(t);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default ShippingModal;
