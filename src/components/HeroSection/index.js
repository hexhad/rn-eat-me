import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {dummyHeroImage} from '../../constants/dummyData';
import CircleButton from '../buttons/CircleButton';
import Button from '../buttons/Button';
import {FONTS} from '../../constants/fonts';

export default () => {
  return (
    <View>
      <ImageBackground
        style={{height: 200}}
        resizeMode={'cover'}
        source={{
          uri: dummyHeroImage,
        }}>
        <View>
          <CircleButton
            styles={{marginTop: 10, marginLeft: 10}}
            onPress={() => {}}
          />
        </View>
        <View style={mainStyles.buttonWrapper}>
          <Button
            icon={'users'}
            text={'Start group order'}
            styles={{width: 'auto', backgroundColor: '#FFF'}}
          />
        </View>
      </ImageBackground>
      <View>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
          <Text style={{fontFamily: FONTS.BOLD, color: '#000', fontSize: 30}}>
            Tossed - St Martin's Lane
          </Text>
          <Text>Chicken · Salads · Healthy</Text>
          <Text>
            0.20 miles away·Opens at 11:00·£7.00 minimum · £0.99 delivery
          </Text>
        </View>
      </View>
    </View>
  );
};

const mainStyles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 10,
    marginBottom: 10,
  },
});
