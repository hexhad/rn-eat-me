import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {FONTS} from '../../../constants/fonts';
import Icon from 'react-native-vector-icons/Feather';
import SplashScreen from 'react-native-splash-screen'

const App = (): JSX.Element => {
  useEffect(()=> {
    if (Platform.OS === 'android'){

      SplashScreen?.hide();
    }
  },[])
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
