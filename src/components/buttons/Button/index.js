import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {FONTS} from '../../../constants/fonts';
import { memo } from "react";

export default memo(({icon, text, onPress, styles}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles, mainStyles.container]}>
      <Icon name={icon} size={20} color="#03b9aa" />
      {text ? <Text style={mainStyles.textStyles}>{text}</Text> : null}
    </TouchableOpacity>
  );
});

const mainStyles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 4,
    borderColor: '#e8ebeb',
  },
  textStyles: {
    fontFamily: FONTS.MEDIUM,
    marginLeft: 5,
  },
});
