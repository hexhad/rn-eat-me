import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constants/colors';

export default ({children}) => {
  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.middleContainer}>{children}</View>
    </View>
  );
};

const mainStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_FOOTER,
    padding: 10,
    minHeight: 100,
    width: '100%',
  },
  middleContainer: {backgroundColor: COLORS.GRAY_FOOTER_MIDDLE, padding: 10},
});
