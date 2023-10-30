import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../../constants/colors';

export default ({word}) => {
  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.leftLine} />
      <Text style={mainStyles.textContent}>{word}</Text>
      <View style={mainStyles.rightLine} />
    </View>
  );
};

const mainStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
  },
  leftLine: {
    backgroundColor: COLORS.GRAY_SEPARATOR,
    height: 2,
    width: '50%',
    borderRadius: 100,
  },
  rightLine: {
    backgroundColor: COLORS.GRAY_SEPARATOR,
    height: 2,
    width: '50%',
    borderRadius: 100,
  },
  textContent: {marginHorizontal: 20},
});
