import {Text, View} from 'react-native';
import {COLORS} from '../../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';

export default memo(({text}) => (
  <View style={styles.container}>
    <Icon name={'smile'} size={20} color={COLORS.SELECTION_TEXT} />
    <Text style={styles.container}>{text}</Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SELECTION_BG,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
  },
  text: {color: COLORS.SELECTION_TEXT, marginLeft: 5},
});
