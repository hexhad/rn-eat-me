import React, {memo, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  Image,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground, useWindowDimensions
} from "react-native";
import {FONTS} from '../../../constants/fonts';
import Icon from 'react-native-vector-icons/Feather';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IMAGES} from '../../../assets/images';
import Button from '../../../components/Button';

const mapProps = (state: {state: any}) => {
  console.log(state);
  return {};
};

const mapDispatch = {};
const connector = connect(mapProps, mapDispatch);

const HomeScreen = (): JSX.Element => {
  const [place, setPlace] = useState(0);
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen?.hide();
    }
  }, []);

  const {width} = useWindowDimensions()

  useEffect(() => {
    console.log('place', place);
  }, [place]);

  const scrollRef = useRef({
    waitForInteraction: true,
    // At least one of the viewAreaCoveragePercentThreshold or itemVisiblePercentThreshold is required.
    viewAreaCoveragePercentThreshold: 95,
    itemVisiblePercentThreshold: 75,
  });

  const handleViewableItemsChanged = useRef(({viewableItems, changed}) => {
    // console.log("Visible items are", viewableItems);
    // console.log("Changed in this iteration", changed)
    setPlace(viewableItems[0]?.index);
  });

  const headerComponent = () => {
    return (
      <View style={{ flex: 1,}}>
      <ImageBackground
        source={IMAGES.HERO_COVER_IMAGE}
        // resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          width,
          height:100,
        }}>
        <Text>Header</Text>
      </ImageBackground>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View
          style={{
            height: 60,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 20,
            paddingVertical: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={IMAGES.HEADER_LOGO}
            style={{height: 25, width: 100, resizeMode: 'contain'}}
          />
          <Button icon={'search'} text={''} />
          <Button
            icon={'user'}
            text={'Account'}
            styles={{marginLeft: 'auto'}}
          />
        </View>

        {/* scrollRef?.current.scrollToIndex({ animated: true, index: 0 })  */}

        <FlatList
          ref={scrollRef}
          data={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4,
            5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
          ]}
          ItemSeparatorComponent={
            <View style={{height: 10, backgroundColor: 'green'}} />
          }
          renderItem={({item}) => (
            <View style={{height: 100, backgroundColor: 'red'}}>
              <Text>{item}</Text>
            </View>
          )}
          ListHeaderComponent={headerComponent}
          stickyHeaderIndices={[0, 1]}
          onViewableItemsChanged={handleViewableItemsChanged.current}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default memo(connector(HomeScreen));
