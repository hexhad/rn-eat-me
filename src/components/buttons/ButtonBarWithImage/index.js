import {IMAGES} from '../../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../../constants/fonts';
import React, { memo } from "react";

export default memo(({
  imageLink = IMAGES.METHOD_DELEVER,
  method = 'Deliver',
  onPress,
}) => {
  return (
    <TouchableOpacity style={mainStyles.container} onPress={onPress}>
      <View>
        <Image source={imageLink} style={mainStyles.imageStyles} />
      </View>
      <View>
        <Text style={mainStyles.textMethod}>{method}</Text>
      </View>
      <View style={{marginLeft: 'auto'}}>
        <Text style={mainStyles.textChange}>Change</Text>
      </View>
    </TouchableOpacity>
  );
});

const mainStyles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', marginVertical: 15},
  imageStyles: {height: 25, width: 25, marginRight: 5},
  textMethod: {fontFamily: FONTS.MEDIUM, fontSize: 15},
  textChange: {fontFamily: FONTS.MEDIUM, fontSize: 13, color: '#03b9aa'},
});
