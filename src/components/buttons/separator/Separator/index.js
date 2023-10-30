import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../constants/colors';

export default () => {
  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.middleRow} />
    </View>
  );
};

const mainStyles = StyleSheet.create({
  container: {alignItems: 'center', overflow: 'hidden'},
  middleRow: {
    backgroundColor: COLORS.GRAY_SEPARATOR,
    height: 2,
    width: '100%',
    borderRadius: 100,
  },
});
