import { Text, View } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default () => {
  return(
    <View style={{alignItems:'center',overflow:'hidden'}}>
      <View style={{backgroundColor:COLORS.GRAY_SEPARATOR,height:2,width:'100%',borderRadius:100}}/>
    </View>
  );
}
