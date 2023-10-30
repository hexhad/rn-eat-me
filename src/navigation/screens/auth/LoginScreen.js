import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderWithSearchAndAccount from '../../../components/headers/HeaderWithSearchAndAccount';
import SeparatorWithCustomWord from '../../../components/buttons/separator/SeparatorWithCustomWord';
import {COLORS} from '../../../constants/colors';
import {connect} from 'react-redux';
import {AuthActionsOld} from '../../../redux/actions/authActionsOld';
import {FONTS} from '../../../constants/fonts';
import {RootNavigation} from '../../rootNavigation';
import {SCREEN_NAMES} from '../../../constants/screens';
import Loader from '../../../components/placeholders/Loader';
import AuthButton, {
  VARIANT_TYPES,
} from '../../../components/buttons/AuthButton';
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
  const onPressGoogle = () => {
    fetchAuth({username: 'kminchelle', password: '0lelplR'});
  };
  const onPressFacebook = () => {
    fetchAuth({username: 'kminchelle', password: '0lelplR'});
  };
  const onPressApple = () => {
    fetchAuth({username: 'kminchelle', password: '0lelplR'});
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderWithSearchAndAccount
          showSearch={false}
          onPressAccount={onPressAccount}
        />
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Sign up or log in</Text>
          <AuthButton
            type={VARIANT_TYPES.FACEBOOK}
            onPress={onPressFacebook}
            styles={{}}
          />
          <AuthButton
            type={VARIANT_TYPES.GOOGLE}
            onPress={onPressGoogle}
            styles={{}}
          />
          <AuthButton
            type={VARIANT_TYPES.APPLE}
            onPress={onPressApple}
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
  title: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
    fontSize: 20,
    marginVertical: 20,
  },
});

export default connector(LoginScreen);
