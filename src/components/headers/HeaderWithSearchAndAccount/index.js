import {Image, StyleSheet, View} from 'react-native';
import Button from '../../buttons/Button';
import React from 'react';
import {IMAGES} from '../../../assets/images';
import {COLORS} from '../../../constants/colors';

export default ({onPressSearch, onPressAccount, showSearch = true}) => {
  return (
    <View style={mainStyles.container}>
      <Image source={IMAGES.HEADER_LOGO} style={mainStyles.image} />
      {showSearch && (
        <Button icon={'search'} text={''} onPress={onPressSearch} />
      )}
      <Button
        onPress={onPressAccount}
        icon={'user'}
        text={'Account'}
        styles={{marginLeft: 'auto'}}
      />
    </View>
  );
};

const mainStyles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_HIGH,
  },
  image: {height: 25, width: 100, resizeMode: 'contain'},
});
