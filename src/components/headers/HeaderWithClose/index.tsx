import { Image, Text, View } from "react-native";
import { FONTS } from "../../../constants/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootNavigation } from "../../../navigation/rootNavigation";
import Icon from "react-native-vector-icons/Feather";
import React from "react";
import { IMAGES } from "../../../assets/images";

export default ({ titile, logoEnabled = false }) => {
  return (
    <View style={{flexDirection:'row', height:50, backgroundColor:'#FFF',alignItems:'center'}}>
      <View style={{flex:1}}>
        {!!logoEnabled && <Image
          source={IMAGES.HEADER_LOGO}
          style={{ height: 25, width: 100, marginLeft: 10, resizeMode: "contain" }}
        />}
      </View>
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
