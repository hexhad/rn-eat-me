import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../../constants/fonts';
import Icon from 'react-native-vector-icons/Feather';

const App = (): JSX.Element => {
  return (
    <View style={styles.dummy}>
      <Icon name="camera" size={30} color="#900" />
      <Text style={{fontFamily: FONTS.BOLD, fontSize: 100}}>
        helloa
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default App;
