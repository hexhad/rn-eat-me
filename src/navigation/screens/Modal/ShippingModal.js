import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import HeaderWithSearchAndButton from '../../../components/headers/HeaderWithSearchAndButton';

const ShippingModal = () => {
  return (
    <SafeAreaView>
      <View>
        <HeaderWithSearchAndButton
          placeholder={'Enter your full address'}
          onChangeText={t => {
            console.log(t);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default ShippingModal;
