import { Text, View } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default ({word}) => {
  return(
    <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',overflow:'hidden'}}>
      <View style={{backgroundColor:COLORS.GRAY_SEPARATOR,height:2,width:'50%',borderRadius:100}}/>
      <Text style={{marginHorizontal:20}}>{word}</Text>
      <View style={{backgroundColor:COLORS.GRAY_SEPARATOR,height:2,width:'50%',borderRadius:100}}/>
    </View>
  );
}
