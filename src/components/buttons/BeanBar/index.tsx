import { dummyData } from "../../../constants/dummyData";
import { FlatList, View } from "react-native";
import { COLORS } from "../../../constants/colors";
import Bean from "../Bean";
import React from "react";

export default ({place,beanRef,scrollRef,dummyData}) => {
  const titleArray = dummyData.map(e=>e?.title)
  return (
    <View style={{ backgroundColor: COLORS.WHITE }}>
      <FlatList
        contentContainerStyle={{
          height: 50,
          backgroundColor: COLORS.WHITE,
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
        data={titleArray}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <Bean {...{ index, item,place,onPress:()=> scrollRef.current?.scrollToIndex({ animated: true, index: index })}} />}
      />
    </View>
  );
};
