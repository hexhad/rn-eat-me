import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RootNavigation } from "../../rootNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONTS } from "../../../constants/fonts";
import HeaderWithClose from "../../../components/headers/HeaderWithClose";
import { connect } from "react-redux";
import { AuthActions } from "../../../redux/actions/authActions";
import FlexButton from "../../../components/buttons/FlexButton";
import { COLORS } from "../../../constants/colors";

const mapState = () => ({

})

const mapDispatch = {
  logout : AuthActions.logoutAction,
}

const connector = connect(mapState,mapDispatch)
const AccountModal = ({logout}): JSX.Element => {

  return (
    <SafeAreaView>
        <HeaderWithClose titile={"Info"} />
      <View style={styles.mainContainer}>

        <FlexButton onPress={()=> {
          logout();
        }} label={'Sign up or log in'}/>

      </View>
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

export default connector(AccountModal);
