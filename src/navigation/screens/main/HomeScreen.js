import React, { memo, useEffect, useRef, useState } from "react";
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
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { FONTS } from "../../../constants/fonts";
import Icon from "react-native-vector-icons/Feather";
import SplashScreen from "react-native-splash-screen";
import { connect } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IMAGES } from "../../../assets/images";
import Button from "../../../components/Button";
import { RootNavigation } from "../../rootNavigation";
import { SCREEN_NAMES } from "../../../constants/screens";

const beanDummy = [
  "acc",
  "abcxxxcc",
  "axbccc",
  "ccc",
  "xxxxxabccc",
  "abccc",
  "acc",
  "abcxxxcc",
  "axbccc",
  "ccc",
  "xxxxxabccc",
  "abccc",
];


const mapProps = (state: {state: any}) => {
  console.log(state);
  return {};
};

const mapDispatch = {};
const connector = connect(mapProps, mapDispatch);

const HomeScreen = () => {
    const [place, setPlace] = useState(0);


    const scrollRef = useRef({
      waitForInteraction: true,
      // At least one of the viewAreaCoveragePercentThreshold or itemVisiblePercentThreshold is required.
      viewAreaCoveragePercentThreshold: 95,
      itemVisiblePercentThreshold: 75,
    });
    const beanRef = useRef();

    useEffect(() => {
      if (Platform.OS === "android") {
        SplashScreen?.hide();
      }
    }, []);

    useEffect(() => {
      console.log(place);

    }, [place]);

    const { width } = useWindowDimensions();


    const handleViewableItemsChanged = useRef(({ viewableItems, changed }) => {
      setPlace(viewableItems[0]?.index);
      console.log(viewableItems[0]?.index);
      beanRef.current?.scrollToIndex({ animated: true, index: viewableItems[0]?.index ?? 0 });
    });


    const ButtonBar = ({ header, desc, icon, mainColor='#2e3333', onPress }) => {
      return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", marginVertical:5}}>
          <View>
            <Icon name={icon} size={20} color={mainColor} style={{ marginRight: 10 }} />
          </View>
          <View>
            <Text style={{ fontFamily: FONTS.MEDIUM,fontSize:15, color:mainColor}}>
              {header}
            </Text>
            <Text style={{ fontFamily: FONTS.LIGHT,fontSize:13 }}>
              {desc}
            </Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Icon name={"chevron-right"} size={20} color="#03b9aa" />
          </View>
        </TouchableOpacity>
      );
    };
    const ButtonBarWithImage = ({ header, desc, imageLink=IMAGES.METHOD_DELEVER,method='Deliver' }) => {
      return (
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginVertical:15}}>
          <View>
            <Image source={imageLink} style={{height:25,width:25,marginRight:5}}/>
          </View>
          <View>
            <Text style={{ fontFamily: FONTS.MEDIUM,fontSize:15 }}>
              {method}
            </Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Text style={{ fontFamily: FONTS.MEDIUM,fontSize:13, color:"#03b9aa"}}>
              Change
            </Text>

          </View>
        </TouchableOpacity>
      );
    };

    const infoOnPress = () => {
      console.log("infoOnPress");
      RootNavigation.navigate(SCREEN_NAMES.MODAL)
    }
    const headerComponent = () => {
      return (
        <View style={{backgroundColor:'#FFF'}}>
          <ImageBackground
            style={{ height: 200 }}
            resizeMode={"cover"}
            source={{ uri: "https://rs-menus-api.roocdn.com/images/5dab5089-c269-4bbc-afc3-2c711b0970a9/image.jpeg?width=1170&height=657" }}>
            <View>
              <CircleButton
                styles={{ marginTop: 10, marginLeft: 10 }}
                onPress={() => {

                }} />
            </View>
            <View style={{
              position: "absolute",
              bottom: 0, right: 0, marginRight: 10, marginBottom: 10,
            }}>
              <Button icon={"search"} text={"Start group order"} styles={{ width: "auto", backgroundColor: "#FFF" }} />
            </View>
          </ImageBackground>
          <View>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Text style={{ fontFamily: FONTS.BOLD, color: "#000", fontSize: 30 }}>Tossed - St Martin's Lane</Text>
              <Text>Chicken · Salads · Healthy</Text>
              <Text>0.20 miles away·Opens at 11:00·£7.00 minimum · £0.99 delivery</Text>
            </View>
            <View style={{ marginHorizontal: 20 }}>

              <ButtonBar icon={'info'} header={"Info"} desc={"Map, allergens and hygiene rating"} onPress={infoOnPress}/>
              <ButtonBar icon={'star'} header={"4.7 Excellent"} desc={"See all 500 reviews"} mainColor={'#4d7c1b'} />
              <ButtonBarWithImage icon={'star'} header={"4.7 Excellent"} desc={"See all 500 reviews"} />
            </View>
          </View>
        </View>
      );
    };


    const CircleButton = ({ onPress, styles }) => {
      return (
        <TouchableOpacity style={{
          // padding:10,
          backgroundColor: "#FFF",
          width: 40,
          height: 40,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          ...styles,
        }}>
          <Icon name={"arrow-left"} size={20} color="#03b9aa" />
        </TouchableOpacity>
      );
    };

    const RenderBeans = () => {
      return (
        <View style={{ backgroundColor: "#F7f7f7",}}>
          <FlatList
            contentContainerStyle={{
              height: 50,
              backgroundColor: "#F7f7f7",
              justifyContent: "center",
              alignItems: "center",
            }}
            onScrollToIndexFailed={({
                                      index,
                                      averageItemLength,
                                    }) => {
              console.log("onScrollToIndexFailed", index);
              console.log("onScrollToIndexFailed", averageItemLength);
              console.log("onScrollToIndexFailed", "place", place);


            }}
            ref={beanRef}
            data={beanDummy}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => <Bean value={item} />} />
          <View>
            <Text>Adults need around 2000 kcal a day</Text>
          </View>
        </View>
      );
    };

    const renderItem = ({ item, index }) => {
      if (index === 0) {
        return <RenderBeans />;
      } else {
        return (
          <View style={{ height: 100, backgroundColor: "#F7f7f7" }}>
            <Text>{item}</Text>
            <Text>{index}</Text>
          </View>
        );
      }
    };

    const Bean = ({ value }) => {
      const onPressBean = () => {
        scrollRef.current?.scrollToIndex({ animated: true, index: 10 });
      };
      return (
        <TouchableOpacity
          onPress={onPressBean}
          style={{
            width: "auto",
            backgroundColor: "red",
            marginLeft: 10,
            paddingVertical: 5,
            paddingHorizontal: 7,
            borderRadius: 100,
          }}>
          <Text>{value}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <View
            style={{
              height: 60,
              backgroundColor: "#FFFFFF",
              flexDirection: "row",
              paddingLeft: 10,
              paddingRight: 20,
              paddingVertical: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Image
              source={IMAGES.HEADER_LOGO}
              style={{ height: 25, width: 100, resizeMode: "contain" }}
            />
            <Button icon={"search"} text={""} />
            <Button
              icon={"user"}
              text={"Account"}
              styles={{ marginLeft: "auto" }}
            />
          </View>

          {/* scrollRef?.current.scrollToIndex({ animated: true, index: 0 })  */}

          <FlatList
            ref={scrollRef}
            data={beanDummy}
            ItemSeparatorComponent={
              <View style={{ height: 10, backgroundColor: "green" }} />
            }
            renderItem={renderItem}
            ListHeaderComponent={headerComponent}
            ListFooterComponent={<View style={{height:300, backgroundColor:'gray'}}/>}
            stickyHeaderIndices={[0, 1]}
            initialNumToRender={60}
            onViewableItemsChanged={handleViewableItemsChanged.current}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
;

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default connector(HomeScreen);
