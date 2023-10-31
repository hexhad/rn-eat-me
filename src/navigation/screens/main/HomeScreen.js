import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  RefreshControl,
} from 'react-native';
import {FONTS} from '../../../constants/fonts';
import {connect} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigation} from '../../rootNavigation';
import {SCREEN_NAMES} from '../../../constants/screens';
import {COLORS} from '../../../constants/colors';
import ButtonBarWithImage from '../../../components/buttons/ButtonBarWithImage';
import ButtonBar from '../../../components/buttons/ButtonBar';
import FoodItem from '../../../components/listItems/FoodItem';
import {footerContent} from '../../../constants/dummyData';
import BeanBar from '../../../components/buttons/BeanBar';
import BottomPopUp from '../../../components/modals/BottomPopUp';
import HeaderWithSearchAndAccount from '../../../components/headers/HeaderWithSearchAndAccount';
import FooterSection from '../../../components/footer/FooterSection';
import HeroSection from '../../../components/HeroSection';
import {fetchProduct} from '../../../redux/reducers/productReducer';
import Loader from '../../../components/placeholders/Loader';

const mapProps = state => {
  return {
    dummyData: state?.products?.data ?? [],
    loading: state?.products?.loading,
  };
};

const mapDispatch = {
  fetchProduct,
};
const connector = connect(mapProps, mapDispatch);

const HomeScreen = ({fetchProduct, dummyData, loading}) => {
  const [place, setPlace] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState(false);

  const scrollRef = useRef({
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 95,
    itemVisiblePercentThreshold: 75,
  });
  const beanRef = useRef();
  const handleViewableItemsChanged = useRef(({viewableItems, changed}) => {
    let sizeOfTheArray = viewableItems[0]?.index;
    let preProcess = sizeOfTheArray === 0 ? 1 : sizeOfTheArray;
    setPlace(preProcess);
  });

  const {width} = useWindowDimensions();

  useEffect(() => {
    if (typeof fetchProduct === 'function') {
      fetchProduct();
    }
  }, []);

  const onPressInfo = () => {
    RootNavigation.navigate(SCREEN_NAMES.INFO_MODAL);
  };
  const onPressRating = () => {
    RootNavigation.navigate(SCREEN_NAMES.RATING_MODAL);
  };
  const onPressSearch = () => {
    RootNavigation.navigate(SCREEN_NAMES.SEARCH_MODAL);
  };
  const onPressAccount = () => {
    RootNavigation.navigate(SCREEN_NAMES.ACCOUNT_MODAL);
  };
  const onPressDeliveryMethod = () => {
    setDeliveryMethod(true);
  };

  const footerComponent = () => {
    return <FooterSection data={footerContent} />;
  };

  const headerComponent = () => {
    return (
      <View style={{backgroundColor: '#FFF'}}>
        <HeroSection />
        <View style={{marginHorizontal: 20}}>
          <ButtonBar
            icon={'info'}
            header={'Info'}
            desc={'Map, allergens and hygiene rating'}
            onPress={onPressInfo}
          />
          <ButtonBar
            icon={'star'}
            header={'4.7 Excellent'}
            desc={'See all 500 reviews'}
            mainColor={'#4d7c1b'}
            onPress={onPressRating}
          />
          <ButtonBarWithImage onPress={onPressDeliveryMethod} />
        </View>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    if (index === 0) {
      return <BeanBar {...{place, beanRef, scrollRef, dummyData}} />;
    } else {
      return (
        <View style={styles.backgroundGray}>
          <View style={styles.mainWrapper}>
            {index === 1 ? <Text>{item.headerSectionTitle}</Text> : null}
            <Text style={styles.titleStyles}>{item.title}</Text>
          </View>
          {item.data.map((foodItem, i) => {
            return (
              <FoodItem
                key={i}
                {...{
                  ...foodItem,
                  index,
                  onPress: () => {
                    RootNavigation.navigate(SCREEN_NAMES.ITEM_MODAL, {
                      foodItem,
                    });
                  },
                }}
              />
            );
          })}
        </View>
      );
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <HeaderWithSearchAndAccount
          onPressSearch={onPressSearch}
          onPressAccount={onPressAccount}
        />
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => fetchProduct()}
            />
          }
          ref={scrollRef}
          data={[{}, ...dummyData]}
          ItemSeparatorComponent={<View style={styles.separatorComponent} />}
          renderItem={renderItem}
          ListHeaderComponent={headerComponent}
          ListFooterComponent={footerComponent}
          stickyHeaderIndices={[1]}
          initialNumToRender={60}
          onViewableItemsChanged={handleViewableItemsChanged.current}
          onScrollEndDrag={() => {
            console.log('onScrollEndDrag', place < 1 ? 1 : place - 1);
            console.log('onScrollEndDrag', 'place', place);
            beanRef.current?.scrollToIndex({
              animated: true,
              index: place < 1 ? 1 : place - 1,
            });
          }}
          onScrollBeginDrag={() => {}}
        />
      </SafeAreaView>
      <BottomPopUp
        visible={deliveryMethod}
        setVisibility={() => setDeliveryMethod(false)}
      />
      <Loader visible={loading} />
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
  separatorComponent: {
    height: 2,
    backgroundColor: COLORS.GRAY,
  },
  backgroundGray: {
    backgroundColor: COLORS.GRAY_WHITE,
  },
  mainWrapper: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center',
  },
  titleStyles: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 20,
    color: COLORS.BLACK,
  },
});

export default connector(HomeScreen);
