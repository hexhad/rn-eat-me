import WebView from "react-native-webview";
import { SafeAreaView } from "react-native";
import HeaderWithClose from "../../../components/headers/HeaderWithClose";
import React from "react";

const WebViewModal = ({ route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderWithClose titile={route.params.title ?? ''} />
      <WebView source={{ uri: route.params.url }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
};


export default WebViewModal;
