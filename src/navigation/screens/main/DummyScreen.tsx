import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootNavigation} from '../../rootNavigation';

const DummySc = (): JSX.Element => {
  return (
    <View style={styles.dummy}>
      <Text>hello</Text>
      <TouchableOpacity onPress={() => RootNavigation.goBack()}>
        <Text>GO BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default DummySc;
