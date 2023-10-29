import {Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';

export default ({label, onPress, styles}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles,
        backgroundColor: COLORS.APP_MAIN_COLOR,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
      }}>
      <Text
        style={{
          color: COLORS.WHITE,
          marginLeft: 10,
          fontFamily: FONTS.MEDIUM,
          fontSize: 16,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
