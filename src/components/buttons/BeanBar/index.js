import { dummyData } from "../../../constants/dummyData";
import { FlatList, View } from "react-native";
import { COLORS } from "../../../constants/colors";
import Bean from "../Bean";
import React from "react";

export default ({ place, beanRef, scrollRef, dummyData }) => {
  const titleArray = dummyData.map(e => e?.title);
  return (
    <View style={{ backgroundColor: COLORS.WHITE }}>
      <FlatList
        contentContainerStyle={{
          height: 50,
          backgroundColor: COLORS.WHITE,
          justifyContent: "center",
          alignItems: "center"
        }}
        onScrollToIndexFailed={({
                                  index,
                                  averageItemLength
                                }) => {
          console.log("onScrollToIndexFailed", index);
          console.log("onScrollToIndexFailed", averageItemLength);
          console.log("onScrollToIndexFailed", "place", place);


        }}
        ref={beanRef}
        data={['',...titleArray]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => index === 0 ? <></> :
          <Bean {...{
            index, item, place, onPress: () => {
              console.log("index", index);
              console.log("index", item);
              // scrollRef.current?.scrollToIndex({ animated: true, index: titleArray.length > index ? index : index - 1 });
              scrollRef.current?.scrollToIndex({ animated: true, index: index });
            }
          }} />}
      />
    </View>
  );
};
