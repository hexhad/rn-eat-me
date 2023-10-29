import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderWithSearchAndAccount from '../../../components/headers/HeaderWithSearchAndAccount';
import SeparatorWithCustomWord from '../../../components/buttons/separator/SeparatorWithCustomWord';
import {COLORS} from '../../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAuth} from '../../stacks/RootStack';
import {connect} from 'react-redux';
import {AuthActionsOld} from '../../../redux/actions/authActionsOld';
// import AuthButton, { VARIANT_TYPES } from "../../../components/buttons/AuthButton";
import {FONTS} from '../../../constants/fonts';
import {RootNavigation} from '../../rootNavigation';
import {SCREEN_NAMES} from '../../../constants/screens';
import Loader from '../../../components/placeholders/Loader';
import AuthButton, {
  VARIANT_TYPES,
} from '../../../components/buttons/AuthButton';
import FooterContainer from '../../../components/footer/FooterContainer';
import FooterSection from '../../../components/footer/FooterSection';
import {footerContent} from '../../../constants/dummyData';
import HyperlinkText from '../../../components/HyperlinkText';
import {fetchAuth} from '../../../redux/reducers/authReducer';

const mapState = state => ({
  loading: state?.auth?.loading,
});
const mapDispatch = {
  login: AuthActionsOld.loginAction,
  fetchAuth,
};
const connector = connect(mapState, mapDispatch);

const LoginScreen = ({login, loading, fetchAuth}) => {
  const tandcOnPress = () => {
    RootNavigation.navigate(SCREEN_NAMES.WEB_VIEW, {
      title: 'Eat Me',
      url: 'https://deliveroo.co.uk/legal',
    });
  };
  const privacyPolicyOnPress = () => {
    RootNavigation.navigate(SCREEN_NAMES.WEB_VIEW, {
      title: 'Eat Me',
      url: 'https://deliveroo.co.uk/privacy',
    });
  };
  const moreDetailsOnPress = () => {
    RootNavigation.navigate(SCREEN_NAMES.WEB_VIEW, {
      title: 'Eat Me',
      url: 'https://deliveroo.co.uk/privacy#use-of-your-information',
    });
  };
  const onPressAccount = () => {
    RootNavigation.navigate(SCREEN_NAMES.ACCOUNT_MODAL);
  };
  const onPressMailButton = () => {
    RootNavigation.navigate(SCREEN_NAMES.EMAIL_SCREEN);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderWithSearchAndAccount
          showSearch={false}
          onPressAccount={onPressAccount}
        />
        <View style={styles.mainContainer}>
          <Text
            style={{
              fontFamily: FONTS.BOLD,
              color: COLORS.BLACK,
              fontSize: 20,
              marginVertical: 20,
            }}>
            Sign up or log in
          </Text>
          <AuthButton
            type={VARIANT_TYPES.FACEBOOK}
            onPress={() => {
              fetchAuth();
              fetchAuth({username: 'kminchelle', password: '0lelplR'});
            }}
            styles={{}}
          />
          <AuthButton
            type={VARIANT_TYPES.GOOGLE}
            onPress={() => {
              login();
            }}
            styles={{}}
          />
          <AuthButton
            type={VARIANT_TYPES.APPLE}
            onPress={() => {
              login();
            }}
            styles={{}}
          />
          <SeparatorWithCustomWord word={'or'} />
          <AuthButton
            type={VARIANT_TYPES.MAIL}
            onPress={onPressMailButton}
            styles={{}}
          />
          <Text style={{marginVertical: 20}}>
            By continuing you agree to our{' '}
            <HyperlinkText onPress={tandcOnPress}>T&Cs</HyperlinkText>. Please
            also check out our{' '}
            <HyperlinkText onPress={privacyPolicyOnPress}>
              Privacy Policy
            </HyperlinkText>
            . We use your data to offer you a personalised experience and to
            better understand and improve our services.{' '}
            <HyperlinkText onPress={moreDetailsOnPress}>
              For more information see here
            </HyperlinkText>
            .
          </Text>
        </View>
        <FooterSection data={footerContent} />
        <Loader visible={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
  },
});

export default connector(LoginScreen);
