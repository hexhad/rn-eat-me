import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RootNavigation} from '../../rootNavigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FONTS} from '../../../constants/fonts';
import HeaderWithClose from '../../../components/headers/HeaderWithClose';
import {connect} from 'react-redux';
import {AuthActionsOld} from '../../../redux/actions/authActionsOld';
import FlexButton from '../../../components/buttons/FlexButton';
import {COLORS} from '../../../constants/colors';
import { fetchAuth, logOut } from "../../../redux/reducers/authReducer";

const mapState = () => ({});

const mapDispatch = {
  logout: logOut,
};

const connector = connect(mapState, mapDispatch);
const AccountModal = ({logout}) => {
  return (
    <SafeAreaView>
      <HeaderWithClose titile={'Info'} />
      <View style={styles.mainContainer}>
        <FlexButton
          onPress={() => {
            logout();
          }}
          label={'Sign up or log in'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    height: '100%',
  },
});

export default connector(AccountModal);
