import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RootNavigation } from "../../rootNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import { FONTS } from "../../../constants/fonts";

const Header = ({ titile }) => {
  return (
    <View style={{flexDirection:'row', height:50, backgroundColor:'#FFF',alignItems:'center'}}>
      <View style={{flex:1}}></View>
      <View style={{flex:1,alignItems:'center'}}><Text style={{fontFamily:FONTS.BOLD,fontSize:16, color:'#000'}}>{titile}</Text>
    </View>
      <View style={{flex:1,alignItems:'flex-end'}}>
        <TouchableOpacity
        onPress={()=>RootNavigation.goBack()}
        style={{
          // width:100,
        // backgroundColor:'red'
          paddingRight:10
        }}
        >
        <Icon name={'x'} size={20} color="#03b9aa" />
      </TouchableOpacity>
    </View>
    </View>
  )
}
const ModalScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View>
<Header  titile={'Info'}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default ModalScreen;
