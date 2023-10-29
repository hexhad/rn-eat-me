import {Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../../../../constants/fonts';
import {COLORS} from '../../../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import CheckBox from '../../../CheckBox';

export default ({data}) => {
  console.log(data);

  const AdditionalItem = ({item: {title, desc, price, currency}, onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          marginVertical: 5,
          justifyContent: 'center',
        }}>
        <View>
          <Text
            style={{
              fontFamily: FONTS.MEDIUM,
              fontSize: 14,
            }}>
            {title}
          </Text>
          <Text>{desc}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
          <View style={{paddingRight: 10}}>
            <Text>{`${currency} ${price}`}</Text>
          </View>
          <View>
            <CheckBox onChange={() => {}}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.MEDIUM,
          fontSize: 16,
          color: COLORS.BLACK,
          marginVertical: 10,
        }}>
        {data.title}
      </Text>
      {data.ingredient.map((e, i) => (
        <AdditionalItem item={e} key={i} onPress={() => {}} />
      ))}
    </View>
  );
};
