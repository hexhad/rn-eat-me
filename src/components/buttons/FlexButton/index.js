import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {memo} from 'react';

export default memo(({label, onPress, styles}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles, mainStyles.container]}>
      <Text style={mainStyles.textLabel}>{label}</Text>
    </TouchableOpacity>
  );
});

const mainStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.APP_MAIN_COLOR,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  textLabel: {
    color: COLORS.WHITE,
    marginLeft: 10,
    fontFamily: FONTS.MEDIUM,
    fontSize: 16,
  },
});
