import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import CircleButton from '../../../components/buttons/CircleButton';
import {RootNavigation} from '../../rootNavigation';
import Acknowledgement from '../../../components/item/Acknowledgement';
import FlexButton from '../../../components/buttons/FlexButton';
import InfoBar from '../../../components/InfoBar';
import QuantityBar from '../../../components/QuantityBar';
import RednerSections from "../../../components/sections/RednerSections";

const ItemModal = ({route}) => {
  const {
    foodItem: {
      special,
      desc,
      image,
      name,
      available,
      price,
      currency,
      kcal,
      bottomData,
    },
  } = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{backgroundColor: COLORS.WHITE}}>
        <ImageBackground
          style={{
            borderColor: COLORS.GRAY,
            marginLeft: 'auto',
            height: 300,
            width: '100%',
          }}
          resizeMode={'cover'}
          source={{uri: image}}>
          <CircleButton
            styles={{marginLeft: 'auto', marginTop: 10, marginRight: 10}}
            icon={'x'}
            onPress={() => {
              RootNavigation.goBack();
            }}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '80%',
            }}>
            {!!special && (
              <View
                style={{
                  backgroundColor: '#FF000026',
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: 'red',
                  minWidth: 150,
                  minHeight: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: 'red', fontSize: 20, fontFamily: FONTS.BOLD}}>
                  Special
                </Text>
              </View>
            )}
          </View>
        </ImageBackground>
        <View style={{marginHorizontal: 15, marginVertical: 20}}>
          <Text
            style={{
              fontFamily: FONTS.MEDIUM,
              fontSize: 30,
              color: COLORS.BLACK,
            }}>
            {name}
          </Text>
          <Text style={{color: COLORS.BLACK}}>{desc}</Text>
          <Text style={{color: COLORS.BLACK, marginTop: 10}}>{kcal}</Text>
          <Acknowledgement />
          {available && <InfoBar content={'Currently sold out'} />}
          <RednerSections data={bottomData} />
        </View>
      </ScrollView>
      <View
        style={{
          padding: 10,
          backgroundColor: COLORS.WHITE,
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 4},
          shadowRadius: 6,
          shadowOpacity: 0.2,
          elevation: 3,
        }}>
        <QuantityBar
          onUpdate={count => {
            console.log(count);
          }}
        />
        <FlexButton label={`Add for ${currency} ${price}`} />
      </View>
    </SafeAreaView>
  );
};

export default ItemModal;
