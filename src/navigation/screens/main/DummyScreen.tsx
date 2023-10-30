import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootNavigation} from '../../rootNavigation';
import {FONTS} from '../../../constants/fonts';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../constants/colors';

const DummySc = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.hexWrapper}>
        <Icon name="hexagon" size={30} color={COLORS.BLACK} />
      </View>
      <Text style={styles.desc}>
        Let’s assume this as a replacement for some screens since some of the
        features are not available due to an inability to register as an LK
        user. Press ‘GO BACK’ to return to the previous screen.
      </Text>
      <TouchableOpacity onPress={() => RootNavigation.goBack()}>
        <Text style={styles.goBackText}>GO BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  desc: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.BLACK,
  },
  goBackText: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  hexWrapper: {
    marginVertical: 10,
  },
});

export default DummySc;
