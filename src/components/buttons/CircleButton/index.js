import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../../constants/colors';
import React, { memo } from "react";
import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native';

export default memo(({onPress, styles, icon = 'arrow-left'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles, mainStyles.container]}>
      <Icon name={icon} size={20} color={COLORS.APP_MAIN_COLOR} />
    </TouchableOpacity>
  );
});

const mainStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
