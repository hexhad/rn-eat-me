import {TouchableOpacity, View, StyleSheet} from 'react-native';
import { memo, useEffect, useState } from "react";
import {COLORS} from '../../constants/colors';

export default memo(({onChange}) => {
  const [checked, setChecked] = useState();

  useEffect(() => {
    onChange(checked);
  }, [checked]);
  const onPressHandle = () => {
    setChecked(prevState => !prevState);
  };
  return (
    <TouchableOpacity onPress={onPressHandle} style={styles.wrapper}>
      {checked && <View style={styles.checked} />}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    height: 20,
    width: 20,
    borderColor: COLORS.GRAY_HIGH,
    borderWidth: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: COLORS.GRAY_HIGH,
  },
});
