import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import Icon from 'react-native-vector-icons/Feather';
import React, { memo } from "react";
import {RootNavigation} from '../../../navigation/rootNavigation';
import {SCREEN_NAMES} from '../../../constants/screens';

export default memo(({visible = false, setVisibility}) => {
  const navigateToLocation = () => {
    RootNavigation.navigate(SCREEN_NAMES.DELIVERY_MODAL);
    setVisibility(false);
  };
  return (
    <Modal {...{visible, transparent: true}}>
      <TouchableWithoutFeedback onPress={() => setVisibility(false)}>
        <View style={{flex: 1, backgroundColor: COLORS.BLACK_LOW}}>
          <TouchableWithoutFeedback onPress={() => console.log('inside')}>
            <View style={mainStyles.container}>
              <TouchableOpacity
                onPress={navigateToLocation}
                style={mainStyles.location}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Icon name={'map-pin'} size={18} color={COLORS.GRAY_HIGH} />
                </View>
                <View style={{flex: 8}}>
                  <Text style={mainStyles.street}>St. James</Text>
                  <Text style={mainStyles.state}>London</Text>
                </View>
                <View style={{flex: 3, marginRight: 10}}>
                  <Text style={mainStyles.change}>Change</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setVisibility(false)}
                style={mainStyles.confirmWrapper}>
                <Text style={mainStyles.confirmText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

const mainStyles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    padding: 10,
    backgroundColor: COLORS.WHITE,
  },
  location: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 3,
    marginBottom: 10,
  },
  street: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
    fontSize: 14,
  },
  state: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.BLACK,
    fontSize: 14,
  },
  change: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.APP_MAIN_COLOR,
    fontSize: 14,
    textAlign: 'right',
  },
  confirmWrapper: {
    backgroundColor: COLORS.APP_MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 3,
  },
  confirmText: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 14,
  },
});
