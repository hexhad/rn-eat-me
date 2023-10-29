import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {FONTS} from '../../../constants/fonts';

export default ({icon, text, onPress, styles}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 13,
        borderRadius: 4,
        borderColor: '#e8ebeb',
      }}>
      <Icon name={icon} size={20} color="#03b9aa" />
      {text ? (
        <Text style={{fontFamily: FONTS.MEDIUM, marginLeft: 5}}>{text}</Text>
      ) : null}
    </TouchableOpacity>
  );
};
