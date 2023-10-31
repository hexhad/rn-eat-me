import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import HeaderWithClose from '../../../components/headers/HeaderWithClose';
import {COLORS} from '../../../constants/colors';
import Separator from '../../../components/buttons/separator/Separator';
import {FONTS} from '../../../constants/fonts';

const SectionsWithHeader = ({header = '', content = []}) => {
  return (
    <View>
      <View style={{marginVertical: 20, paddingHorizontal: 20}}>
        <Text
          style={{fontFamily: FONTS.BOLD, fontSize: 23, color: COLORS.BLACK}}>
          {header}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: COLORS.WHITE,
          borderColor: COLORS.GRAY_HIGH,
          borderTopWidth: 2,
          borderBottomWidth: 2,
        }}>
        <View>
          <Text>{content[0]}</Text>
        </View>
        {content[1] && (
          <>
            <Separator styles={{marginVertical: 10}} />
            <View>
              <Text>{content[1]}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const MiddleContent = () => {
  return [...Array(10)].map((e, i) => {
    return (
      <SectionsWithHeader
        key={i}
        header={"About Tossed - St Martin's Lane"}
        content={[
          "Questions? Ask Tossed - St Martin's Lane about their ingredients and cooking methods",
          "Call Tossed - St Martin's Lane on +447541904227",
        ]}
      />
    );
  });
};

const InfoModal = () => {
  return (
    <SafeAreaView>
      <HeaderWithClose titile={'Info'} />
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <MiddleContent />
        <SectionsWithHeader
          header={"About Tossed - St Martin's Lane"}
          content={[
            "Questions? Ask Tossed - St Martin's Lane about their ingredients and cooking methods",
            "Call Tossed - St Martin's Lane on +447541904227",
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default InfoModal;
