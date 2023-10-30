import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
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
import RednerSections from '../../../components/sections/RednerSections';

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
    <SafeAreaView style={styles.flexWrapper}>
      <ScrollView contentContainerStyle={{backgroundColor: COLORS.WHITE}}>
        <ImageBackground
          style={styles.imageBGStyles}
          resizeMode={'cover'}
          source={{uri: image}}>
          <CircleButton
            styles={styles.closeButton}
            icon={'x'}
            onPress={() => {
              RootNavigation.goBack();
            }}
          />
          <View style={styles.specialWrapper}>
            {!!special && (
              <View style={styles.specialContent}>
                <Text style={styles.specialText}>Special</Text>
              </View>
            )}
          </View>
        </ImageBackground>
        <View style={{marginHorizontal: 15, marginVertical: 20}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={{color: COLORS.BLACK}}>{desc}</Text>
          <Text style={{color: COLORS.BLACK, marginTop: 10}}>{kcal}</Text>
          <Acknowledgement />
          {available && <InfoBar content={'Currently sold out'} />}
          <RednerSections data={bottomData} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
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

const styles = StyleSheet.create({
  flexWrapper: {flex: 1},
  imageBGStyles: {
    borderColor: COLORS.GRAY,
    marginLeft: 'auto',
    height: 300,
    width: '100%',
  },
  closeButton: {marginLeft: 'auto', marginTop: 10, marginRight: 10},
  specialWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  specialContent: {
    backgroundColor: '#FF000026',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'red',
    minWidth: 150,
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 30,
    color: COLORS.BLACK,
  },
  footer: {
    padding: 10,
    backgroundColor: COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  specialText: {color: 'red', fontSize: 20, fontFamily: FONTS.BOLD},
});
