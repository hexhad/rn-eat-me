import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../../../../constants/fonts';
import {COLORS} from '../../../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import React, {memo} from 'react';
import CheckBox from '../../../CheckBox';

export default memo(({data}) => {
  const AdditionalItem = ({item: {title, desc, price, currency}, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={mainStyles.touchableWrapper}>
        <View>
          <Text style={mainStyles.title}>{title}</Text>
          <Text>{desc}</Text>
        </View>
        <View style={mainStyles.addItemWrapper}>
          <View style={{paddingRight: 10}}>
            <Text>{`${currency} ${price}`}</Text>
          </View>
          <View>
            <CheckBox onChange={() => {}} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text style={mainStyles.titleText}>{data.title}</Text>
      {data.ingredient.map((e, i) => (
        <AdditionalItem item={e} key={i} onPress={() => {}} />
      ))}
    </View>
  );
});

const mainStyles = StyleSheet.create({
  titleText: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 16,
    color: COLORS.BLACK,
    marginVertical: 10,
  },
  touchableWrapper: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 14,
  },
  addItemWrapper: {flexDirection: 'row', marginLeft: 'auto'},
});
