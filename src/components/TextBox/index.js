import {TextInput, View} from 'react-native';
import {useState} from 'react';
import {COLORS} from '../../constants/colors';

export default ({placeholder, onChangeText, defaultText, styles, more}) => {
  const [text, setText] = useState(defaultText);
  const onchange = e => {
    setText(e);
    onChangeText(e);
  };
  return (
    <View>
      <TextInput
        style={{
          ...styles,
          height: 40,
          backgroundColor: COLORS.WHITE,
          borderRadius: 4,
          marginVertical: 5,
          paddingHorizontal: 12,
          borderWidth: 2,
          borderColor: COLORS.GRAY,
        }}
        placeholder={placeholder}
        onChangeText={onchange}
        defaultValue={text}
        {...more}
      />
    </View>
  );
};
