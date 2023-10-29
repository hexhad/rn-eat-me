import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import React, {useEffect, useState} from 'react';

export default ({onUpdate}) => {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    onUpdate(qty);
  }, [qty]);

  const onPressPlus = () => {
    setQty(prevState => prevState + 1);
  };
  const onPressMinus = () => {
    setQty(prevState => (prevState === 1 ? prevState : prevState - 1));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <TouchableOpacity onPress={onPressMinus}>
          <Icon name={'minus-circle'} size={23} color={COLORS.BLACK} />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontFamily: FONTS.MEDIUM,
            fontSize: 18,
            color: COLORS.BLACK,
            marginHorizontal: 10,
          }}>
          {qty}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPressPlus}>
          <Icon name={'plus-circle'} size={23} color={COLORS.BLACK} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
