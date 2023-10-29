import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import HeaderWithClose from '../../../components/headers/HeaderWithClose';
const InfoModal = () => {
  return (
    <SafeAreaView>
      <View>
        <HeaderWithClose titile={'Info'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default InfoModal;
