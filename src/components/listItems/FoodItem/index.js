import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../../constants/colors';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../../constants/fonts';
import React, { memo } from "react";

export default memo(({
  name,
  price,
  image,
  desc,
  popular,
  available = true,
  special,
  kcal,
  currency,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!available}
      style={[
        mainStyles.container,
        {
          opacity: available ? 1 : 0.5,
          backgroundColor: available ? COLORS.GRAY : COLORS.GRAY_LOW,
        },
      ]}>
      <View style={{flex: 4}}>
        <Text
          style={{fontFamily: FONTS.MEDIUM, fontSize: 17, color: COLORS.BLACK}}>
          {name}
        </Text>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {desc}
        </Text>
        <Text>{kcal}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>{`${currency}${price}`}</Text>
          {popular ? (
            <Text style={{color: COLORS.GOLD}}> - Popular</Text>
          ) : null}
        </View>
      </View>
      <View style={{flex: 2}}>
        <ImageBackground
          style={mainStyles.imageBG}
          resizeMode={'cover'}
          source={{uri: image}}>
          {special ? (
            <View style={mainStyles.special}>
              <Text style={{color: 'red'}}>Special</Text>
            </View>
          ) : null}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
});

const mainStyles = StyleSheet.create({
  container: {
    minHeight: 100,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  imageBG: {
    height: 80,
    width: 80,
    margin: 10,
    borderColor: COLORS.GRAY,
    borderWidth: 2,
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  special: {
    backgroundColor: '#FF000026',
    padding: 4,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'red',
  },
});
