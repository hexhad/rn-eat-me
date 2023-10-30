import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderWithClose from '../../../components/headers/HeaderWithClose';
import Star from 'react-native-star-view';
import {COLORS} from '../../../constants/colors';
import FlexButton from '../../../components/buttons/FlexButton';
import {FONTS} from '../../../constants/fonts';
import Separator from '../../../components/buttons/separator/Separator';
import Selection from '../../../components/labels/Selection';
import { DummyReviews } from "../../../constants/dummyData";
import {RootNavigation} from '../../rootNavigation';

const ReviewComments = ({data = []}) =>
  data.map((e, i) => (
    <View key={i} style={{marginVertical: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: e.avatar}} style={{width: 30, height: 30}} />
        <Text style={{marginLeft: 10, fontFamily: FONTS.MEDIUM, fontSize: 20}}>
          {e.name}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Star
          score={4.7}
          style={{
            width: 100,
            height: 20,
          }}
        />
        <Text style={{marginLeft: 10, fontFamily: FONTS.MEDIUM, fontSize: 15}}>
          {e.date}
        </Text>
      </View>
      <Text style={{fontFamily: FONTS.MEDIUM, fontSize: 15}}>{e.comment}</Text>
      <Selection text={e.selection} />
      <Separator styles={{marginTop: 10}} />
    </View>
  ));

const RatingList = ({data = []}) =>
  data.map((e, i) => (
    <View style={{flexDirection: 'row', alignItems: 'center'}} key={i}>
      <Text>{e.index}</Text>
      <View
        style={{
          marginLeft: 10,
          width: '90%',
          backgroundColor: COLORS.GRAY_HIGH,
          height: 5,
          borderRadius: 10,
        }}>
        <View
          style={{
            backgroundColor: 'green',
            width: `${e.value}%`,
            height: '100%',
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  ));

const onPressBackToMenu = () => RootNavigation.goBack();
const RatingModal = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderWithClose titile={'Reviews'} />
      <ScrollView contentContainerStyle={{marginHorizontal: 10}}>
        <View style={styles.headerContainer}>
          <View style={styles.totalRatingNumber}>
            <Text style={styles.totalReviewCount}>
              {DummyReviews.totalReview}
            </Text>
            <Star
              score={DummyReviews.totalReview}
              style={{
                width: 100,
                height: 20,
              }}
            />
            <Text style={styles.totalReviewDesc}>{DummyReviews.desc}</Text>
          </View>
          <View style={styles.totalRatingView}>
            <RatingList data={DummyReviews.bars} />
          </View>
        </View>

        <View style={styles.scrollerContainer}>
          <Text
            style={{
              fontFamily: FONTS.BOLD,
              fontSize: 20,
              color: COLORS.BLACK,
              marginBottom: 10,
            }}>
            All reviews
          </Text>
          <Separator />
          <ReviewComments data={DummyReviews.allReviews} />
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <FlexButton label={'Back to menu'} onPress={onPressBackToMenu} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  scrollerContainer: {},
  footerContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  totalRatingNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalRatingView: {
    flex: 2,
    padding: 10,
  },
  totalReviewCount: {
    fontFamily: FONTS.BOLD,
    fontSize: 30,
  },
  totalReviewDesc: {
    fontFamily: FONTS.REGULAR,
  },
});

export default RatingModal;
