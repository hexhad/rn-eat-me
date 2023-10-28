import { Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from "../../../constants/colors";


export const VARIANT_TYPES = {
  FACEBOOK:'FACEBOOK',
  GOOGLE:'GOOGLE',
  APPLE:'APPLE',
  MAIL:'MAIL'
}
export default ({onPress, type, styles}) => {

  const VARIANT = {
    FACEBOOK: {color:COLORS.BLUE,fontColor:COLORS.WHITE,logo:'facebook', name:'Facebook'},
    GOOGLE: {color:COLORS.WHITE,fontColor:COLORS.BLACK,logo:'google',name:'Google'},
    APPLE: {color:COLORS.BLACK,fontColor:COLORS.WHITE,logo:'apple',name:'Apple'},
    MAIL: {color:COLORS.APP_MAIN_COLOR,fontColor:COLORS.WHITE,logo:'envelope',name:'email'},
  }

  return(
    <TouchableOpacity onPress={onPress} style={{...styles,backgroundColor:VARIANT[type].color,flexDirection:'row',padding:10,borderRadius:3,alignItems:'center',justifyContent:'center',marginVertical:5,borderWidth:VARIANT[type].color === COLORS.WHITE ? 1 : 0, borderColor:COLORS.GRAY_HIGH}}>
      <Icon name={VARIANT[type].logo} size={15} color={VARIANT[type].fontColor}/>
      <Text style={{ color: VARIANT[type].fontColor, marginLeft:10 }}>
        {`Continue with ${VARIANT[type].name}`}
      </Text>
    </TouchableOpacity>
  );
}
