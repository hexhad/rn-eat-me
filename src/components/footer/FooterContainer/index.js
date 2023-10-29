import { View } from "react-native";
import { COLORS } from "../../../constants/colors";

export default ({ children }) => {
  return (
    <View style={{ backgroundColor: COLORS.GRAY_FOOTER, padding: 10,minHeight:100,width:'100%' }}>
      <View style={{ backgroundColor: COLORS.GRAY_FOOTER_MIDDLE,padding: 10 }}>
        {children}
      </View>
    </View>
  );
}


