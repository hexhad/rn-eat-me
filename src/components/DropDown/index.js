import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import ListModal from '../modals/ListModal';

export default ({data, onChange}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  useEffect(() => {
    onChange(selected);
  }, [selected]);
  const onPressHandle = () => {
    setVisible(prevState => !prevState);
  };
  return (
    <TouchableOpacity
      onPress={onPressHandle}
      style={{
        flexDirection: 'row',
        backgroundColor: COLORS.WHITE,
        borderColor: COLORS.GRAY_HIGH,
        borderWidth: 1,
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 10,
        borderRadius: 3,
      }}>
      <Text
        style={{
          fontFamily: FONTS.REGULAR,
          color: COLORS.GRAY_FOOTER_MIDDLE,
          fontSize: 16,
        }}>
        {selected}
      </Text>
      <View style={{marginLeft: 'auto'}}>
        <Icon
          name={'chevrons-up'}
          size={25}
          color={COLORS.GRAY_FOOTER_MIDDLE}
        />
      </View>
      <ListModal
        visible={visible}
        data={data}
        onChange={e => {
          setVisible(false);
          setSelected(e);
        }}
      />
    </TouchableOpacity>
  );
};
