import {Text} from 'react-native';
import {COLORS} from '../../constants/colors';
import React, {memo} from 'react';

const HyperlinkText = ({children, onPress, underlined = true}) => (
  <Text
    onPress={onPress}
    style={{
      color: COLORS.APP_MAIN_COLOR,
      textDecorationLine: underlined ? 'underline' : 'none',
    }}>
    {children}
  </Text>
);

export default memo(HyperlinkText);
