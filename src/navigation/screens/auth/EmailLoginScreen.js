import HeaderWithSearchAndAccount from '../../../components/headers/HeaderWithSearchAndAccount';
import React, {useEffect, useState} from 'react';
import {RootNavigation} from '../../rootNavigation';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../../constants/fonts';
import {COLORS} from '../../../constants/colors';
import TextBox from '../../../components/TextBox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthActionsOld} from '../../../redux/actions/authActionsOld';
import {fetchAuth} from '../../../redux/reducers/authReducer';
import {connect} from 'react-redux';
import FlexButton from '../../../components/buttons/FlexButton';
import FooterSection from '../../../components/footer/FooterSection';
import {footerContent} from '../../../constants/dummyData';

const mapState = state => ({
  loading: state?.auth?.loading,
});
const mapDispatch = {
  login: AuthActionsOld.loginAction,
  fetchAuth,
};
const connector = connect(mapState, mapDispatch);
const EmailLoginScreen = ({fetchAuth}) => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  useEffect(() => {
    // fetchAuth({username: 'kminchelle', password: '0lelplR'});
    if (__DEV__) {
      setUserName('kminchelle');
      setPassWord('0lelplR');
    }
  }, []);

  const triggerAuth = () => {
    console.log('Triggered', {username: userName, password: passWord});
    fetchAuth({username: userName, password: passWord});
  };

  const onPressAccount = () => {
    RootNavigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <HeaderWithSearchAndAccount
          showSearch={false}
          onPressAccount={onPressAccount}
        />
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Sign up or log in</Text>
          <TextBox
            styles={{}}
            onChangeText={() => {}}
            placeholder={'username'}
            defaultText={userName}
          />
          <TextBox
            styles={{}}
            onChangeText={() => {}}
            placeholder={'password'}
            defaultText={passWord}
            more={{secureTextEntry: true}}
          />
          <FlexButton label={'Continue'} onPress={triggerAuth} />
        </View>
        <FooterSection data={footerContent} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default connector(EmailLoginScreen);

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 100,
  },
  container: {flex: 1, backgroundColor: COLORS.WHITE},
  title: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
    fontSize: 20,
    marginVertical: 20,
  },
});
