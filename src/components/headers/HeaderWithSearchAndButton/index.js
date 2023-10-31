import {View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootNavigation} from '../../../navigation/rootNavigation';
import Icon from 'react-native-vector-icons/Feather';
import React, { memo, useState } from "react";

export default memo(({placeholder, onChangeText}) => {
  const [text, setText] = useState('');
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#FFF',
        alignItems: 'center',
      }}>
      <View style={{flex: 1, paddingLeft: 10}}>
        <TouchableOpacity onPress={() => RootNavigation.goBack()}>
          <Icon name={'arrow-left'} size={20} color="#03b9aa" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 10}}>
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
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => RootNavigation.goBack()}>
          <Icon name={'navigation'} size={20} color="#03b9aa" />
        </TouchableOpacity>
      </View>
    </View>
  );
});
