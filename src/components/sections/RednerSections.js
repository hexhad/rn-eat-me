import React from 'react';
import {View} from 'react-native';
import AdditionalSection from './atoms/AdditionalSection';
import VarietySection from './atoms/VarietySection';
import ExtraSection from './atoms/ExtraSection';
import {connect} from 'react-redux';

const mapState = state => ({});
const mapDispatch = {};
const connector = connect(mapState, mapDispatch);

const SECTION_TYPES = {
  EXTRA: 'extra',
  VARIETY: 'variety',
  ADDITIONAL: 'additional',
};

const SectionFactory = ({item}) => {
  switch (item.type) {
    case SECTION_TYPES.ADDITIONAL:
      return <AdditionalSection {...{data: item?.data}} />;
    case SECTION_TYPES.VARIETY:
      return <VarietySection {...{data: item?.data}} />;
    case SECTION_TYPES.EXTRA:
      return <ExtraSection {...{data: item?.data}} />;
    default:
      return null;
  }
};
export default connector(({data = []}) => {
  return (
    <View>
      {data.map((item, index) => (
        <SectionFactory item={item} key={index} />
      ))}
    </View>
  );
});
