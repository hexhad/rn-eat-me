import {View, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootNavigation} from '../../../navigation/rootNavigation';
import Icon from 'react-native-vector-icons/Feather';
import React, { memo, useState } from "react";

export default memo(({placeholder, onChangeText}) => {
  const [text, setText] = useState('');
  return (
    <View style={mainStyles.container}>
      <View style={{flex: 1, paddingLeft: 10}}>
        <TouchableOpacity onPress={() => RootNavigation.goBack()}>
          <Icon name={'arrow-left'} size={20} color="#03b9aa" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 11, marginRight: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder={placeholder}
          onChangeText={newText => {
            setText(newText);
            onChangeText(newText);
          }}
          defaultValue={text}
        />
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
  },
});
