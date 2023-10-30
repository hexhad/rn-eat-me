import Icon from 'react-native-vector-icons/Feather';
import {Text, View} from 'react-native';
import {COLORS} from '../../constants/colors';

export default ({content}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
      <View style={{marginRight: 5}}>
        <Icon name={'info'} size={20} color={COLORS.GRAY_FOOTER_MIDDLE} />
      </View>
      <View>
        <Text>{content}</Text>
      </View>
    </View>
  );
};
