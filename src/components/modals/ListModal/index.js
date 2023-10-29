import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {COLORS} from '../../../constants/colors';

export default ({visible, data, onChange}) => {
  const onPressItem = selection => {
    onChange(selection);
  };
  const Item = ({selection}) => {
    return (
      <TouchableOpacity onPress={() => onPressItem(selection)}>
        <Text>{selection}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal visible={visible} transparent={true}>
      <View style={{flex: 1, backgroundColor: COLORS.BLACK_LOW}}>
        <TouchableWithoutFeedback onPress={() => console.log('inside')}>
          <View
            style={{
              marginTop: 'auto',
              padding: 10,
              backgroundColor: COLORS.WHITE,
            }}>
            <ScrollView>
              {data?.map((e, i) => (
                <Item selection={e} key={i} />
              ))}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};
