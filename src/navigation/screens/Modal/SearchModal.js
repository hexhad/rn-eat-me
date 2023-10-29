import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RootNavigation } from "../../rootNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import { FONTS } from "../../../constants/fonts";
import HeaderWithSearch from "../../../components/headers/HeaderWithSearch";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const SearchModal = (): JSX.Element => {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <HeaderWithSearch
          placeholder={`Search Tossed - St Martin's Lane`}
          onChnageText={(t)=>{
            console.log(t);
          }}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default SearchModal;
