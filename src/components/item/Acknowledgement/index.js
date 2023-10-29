import { Text, View } from "react-native";
import HyperlinkText from "../../HyperlinkText";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";

export default () => {
  return (
    <View style={{
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: COLORS.GRAY_HIGH,
      marginVertical: 10,
      paddingVertical: 10,
    }}>
      <View>
        <Text style={{ fontFamily: FONTS.MEDIUM, fontSize: 15, color: COLORS.BLACK }}>Contains No known
          allergens.</Text>
      </View>
      <View>
        <Text>
          Questions about allergens, ingredients or cooking methods?<HyperlinkText underlined={false}>Please contact the
          restaurant.</HyperlinkText>
        </Text>
      </View>
    </View>
  );
}
