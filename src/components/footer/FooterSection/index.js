import { Text, View } from "react-native";
import { COLORS } from "../../../constants/colors";
import FooterContainer from "../FooterContainer";
import { FONTS } from "../../../constants/fonts";


const MiddleContent = ({data}) => {
  return data.map((item,index)=>{
    return(
      <View key={index} style={{marginTop:10}}>
        <Text style={{color:COLORS.WHITE,fontFamily:FONTS.MEDIUM,fontSize:18}}>{item.title}</Text>
        {item?.subtitles.map((subItem, index) => (<Text key={index} style={{color:COLORS.WHITE,fontFamily:FONTS.MEDIUM,fontSize:14,lineHeight:28}}>{subItem}</Text>))}
      </View>
    );
  })
}
export default ({ data = [] }) => {
  return (
    <FooterContainer>
      <MiddleContent {...{ data }}/>
    </FooterContainer>
  );
}
