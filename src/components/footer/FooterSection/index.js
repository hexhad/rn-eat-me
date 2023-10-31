import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../constants/colors';
import FooterContainer from '../FooterContainer';
import {FONTS} from '../../../constants/fonts';
import { memo } from "react";

const MiddleContent = ({data}) => {
  return data.map((item, index) => {
    return (
      <View key={index} style={{marginTop: 10}}>
        <Text style={mainStyles.textUp}>{item.title}</Text>
        {item?.subtitles.map((subItem, index) => (
          <Text key={index} style={mainStyles.textMiddle}>
            {subItem}
          </Text>
        ))}
      </View>
    );
  });
};
export default memo(({data = []}) => {
  return (
    <FooterContainer>
      <MiddleContent {...{data}} />
    </FooterContainer>
  );
});

const mainStyles = StyleSheet.create({
  textUp: {color: COLORS.WHITE, fontFamily: FONTS.MEDIUM, fontSize: 18},
  textMiddle: {
    color: COLORS.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: 14,
    lineHeight: 28,
  },
});
