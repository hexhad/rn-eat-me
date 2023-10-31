import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import React, { JSX, memo, PropsWithChildren } from "react";

type LoaderProps = PropsWithChildren<{
  visible: boolean;
}>;
export default memo(({visible}: LoaderProps): JSX.Element => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" style={styles.indicator} />
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.3,
    backgroundColor: 'black',
  },
  indicator: {
    flex: 1,
  },
});
