import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeaderWithSearchAndAccount from "../../../components/headers/HeaderWithSearchAndAccount";
import SeparatorWithCustomWord from "../../../components/buttons/separator/SeparatorWithCustomWord";
import { COLORS } from "../../../constants/colors";


const LoginScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.dummy}>
      <HeaderWithSearchAndAccount showSearch={false} onPressSearch={()=>{}} onPressAccount={()=>{}}/>
      <SeparatorWithCustomWord word={'or'}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dummy: {
    flex:1,
    backgroundColor: COLORS.WHITE,
  },
});

export default LoginScreen;
