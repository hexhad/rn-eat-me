import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootNavigation} from '../../rootNavigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FONTS} from '../../../constants/fonts';
import HeaderWithClose from '../../../components/headers/HeaderWithClose';
import {connect} from 'react-redux';
import {AuthActionsOld} from '../../../redux/actions/authActionsOld';
import FlexButton from '../../../components/buttons/FlexButton';
import {COLORS} from '../../../constants/colors';
import {fetchAuth, logOut} from '../../../redux/reducers/authReducer';
import DropDown from '../../../components/DropDown';
import Icon from 'react-native-vector-icons/Feather';
import { SCREEN_NAMES } from "../../../constants/screens";

const mapState = () => ({});

const mapDispatch = {
  logout: logOut,
};

const connector = connect(mapState, mapDispatch);
const AccountModal = ({logout}) => {
  const onPressFAQs = () => {
    RootNavigation.navigate(SCREEN_NAMES.WEB_VIEW, {
      title: 'Eat Me',
      url: ' https://deliveroo.co.uk/faq',
    });
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderWithClose titile={''} logoEnabled={true} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <FlexButton
            onPress={() => {
              logout();
            }}
            label={'Sign up or log in'}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={onPressFAQs}
            style={{
              flexDirection: 'row',
              backgroundColor: COLORS.WHITE,
              borderColor: COLORS.GRAY_HIGH,
              borderWidth: 1,
              marginVertical: 15,
              padding: 10,
            }}>
            <Icon
              name={'help-circle'}
              size={25}
              color={COLORS.GRAY_FOOTER_MIDDLE}
            />
            <Text
              style={{
                marginLeft: 10,
                fontFamily: FONTS.REGULAR,
                color: COLORS.GRAY_FOOTER_MIDDLE,
                fontSize: 16,
              }}>
              FAQs
            </Text>
            <View style={{marginLeft: 'auto'}}>
              <Icon
                name={'chevron-right'}
                size={25}
                color={COLORS.APP_MAIN_COLOR}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <DropDown data={['English']} onChange={itm => {}} />
        <DropDown data={['UK', 'US', 'LK']} onChange={itm => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    marginTop: 10,
    // height: '100%',
  },
});

export default connector(AccountModal);
