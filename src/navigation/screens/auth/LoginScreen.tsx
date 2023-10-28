import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeaderWithSearchAndAccount from "../../../components/headers/HeaderWithSearchAndAccount";
import SeparatorWithCustomWord from "../../../components/buttons/separator/SeparatorWithCustomWord";
import { COLORS } from "../../../constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuth } from "../../stacks/RootStack";
import { connect } from "react-redux";
import { AuthActions } from "../../../redux/actions/authActions";
import AuthButton, { VARIANT_TYPES } from "../../../components/buttons/AuthButton";
import { FONTS } from "../../../constants/fonts";
import { RootNavigation } from "../../rootNavigation";
import { SCREEN_NAMES } from "../../../constants/screens";
import Loader from "../../../components/placeholders/Loader";

const mapState = (state) => ({
  loading :state?.auth?.loading
});
const mapDispatch = {
  login: AuthActions.loginAction,
};
const connector = connect(mapState, mapDispatch);

const HyperlinkText = ({ children, onPress }) => <Text onPress={onPress}
                                                       style={{ color: COLORS.APP_MAIN_COLOR, textDecorationLine: "underline" }}>{children}</Text>;

const LoginScreen = ({ login, loading }): JSX.Element => {
  const tandcOnPress = () => {
    RootNavigation.navigate(SCREEN_NAMES.WEB_VIEW,{
      title:'Eat Me',
      url:'https://deliveroo.co.uk/legal'
    })
  };
  const privacyPolicyOnPress = () => {
    RootNavigation.navigate(SCREEN_NAMES.WEB_VIEW,{
      title:'Eat Me',
      url:'https://deliveroo.co.uk/privacy'
    })
  };
  const moreDetailsOnPress = () => {
    RootNavigation.navigate(SCREEN_NAMES.WEB_VIEW,{
      title:'Eat Me',
      url:'https://deliveroo.co.uk/privacy#use-of-your-information'
    })
  };
  const onPressAccount = () => {
    RootNavigation.navigate(SCREEN_NAMES.ACCOUNT_MODAL)
  };
  return (
    <SafeAreaView>
      <HeaderWithSearchAndAccount
        showSearch={false}
        onPressAccount={onPressAccount}
      />
      <View style={styles.mainContainer}>
        <Text style={{ fontFamily: FONTS.BOLD, color: COLORS.BLACK, fontSize: 20, marginVertical: 20 }}>Sign up or log
          in </Text>
        <AuthButton type={VARIANT_TYPES.FACEBOOK} onPress={() => login()} styles={{}} />
        <AuthButton type={VARIANT_TYPES.GOOGLE} onPress={() => login()} styles={{}} />
        <AuthButton type={VARIANT_TYPES.APPLE} onPress={() => login()} styles={{}} />
        <SeparatorWithCustomWord word={"or"} />
        <AuthButton type={VARIANT_TYPES.MAIL} onPress={() => login()} styles={{}} />
        <Text style={{marginTop:10}}>
          By continuing you agree to our <HyperlinkText onPress={tandcOnPress}>T&Cs</HyperlinkText>. Please also check
          out our <HyperlinkText onPress={privacyPolicyOnPress}>Privacy Policy</HyperlinkText>. We use your data to
          offer you a
          personalised experience and to better understand and improve our services. <HyperlinkText
          onPress={moreDetailsOnPress}>For more information see here</HyperlinkText>.
        </Text>
      </View>
      <Loader visible={loading}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    height: "100%"
  }
});

export default connector(LoginScreen);
