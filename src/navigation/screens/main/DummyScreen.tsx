import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const DummySc = (): JSX.Element => {
  return (
    <View style={styles.dummy}>
      <Text>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default DummySc;
