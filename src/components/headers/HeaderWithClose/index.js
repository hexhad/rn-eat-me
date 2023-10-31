import {Image, StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../../constants/fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootNavigation} from '../../../navigation/rootNavigation';
import Icon from 'react-native-vector-icons/Feather';
import React, { memo } from "react";
import {IMAGES} from '../../../assets/images';
import {COLORS} from '../../../constants/colors';

export default memo(({titile = '', logoEnabled = false}) => {
  return (
    <View style={mainStyles.container}>
      <View style={{flex: 1}}>
        {!!logoEnabled && (
          <Image source={IMAGES.HEADER_LOGO} style={mainStyles.image} />
        )}
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontFamily: FONTS.BOLD, fontSize: 16, color: '#000'}}>
          {titile}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity
          onPress={() => RootNavigation.goBack()}
          style={{
            paddingRight: 10,
          }}>
          <Icon name={'x'} size={20} color="#03b9aa" />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const mainStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderColor: COLORS.GRAY,
    borderBottomWidth: 1,
  },
  image: {
    height: 25,
    width: 100,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});
