import { Text, View, TextInput } from "react-native";
import { FONTS } from "../../../constants/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootNavigation } from "../../../navigation/rootNavigation";
import Icon from "react-native-vector-icons/Feather";
import React, { useEffect, useState } from "react";

export default ({ placeholder, onChnageText, }) => {
const [text,setText] = useState('');
  return (
    <View style={{flexDirection:'row', height:50, backgroundColor:'#FFF',alignItems:'center'}}>
      <View style={{flex:1,paddingLeft:10}}>
        <TouchableOpacity
          onPress={()=>RootNavigation.goBack()}>
        <Icon name={'arrow-left'} size={20} color="#03b9aa" />
        </TouchableOpacity>
      </View>
      <View style={{flex:11 , marginRight:10}}>
        <TextInput
          style={{height: 40}}
          placeholder={placeholder}
          onChangeText={newText => {
            setText(newText)
            onChnageText(newText);
          }}
          defaultValue={text}
        />
      </View>
    </View>
  )
}
