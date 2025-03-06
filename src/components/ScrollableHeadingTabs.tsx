import {StyleSheet, ScrollView} from 'react-native';
import React, {PropsWithChildren} from 'react';

import {CustomTextReg} from './CustomText';

type ScrollableHeadingTabsType = PropsWithChildren<{
  tabnames: Array<string>;
}>;

const ScrollableHeadingTabs = (props: ScrollableHeadingTabsType) => {
  return (
    <ScrollView
      horizontal
      style={styles.ScrollableHeadingTabs__mainCont}
      showsHorizontalScrollIndicator={false}>
      {props.tabnames.map((tabname, i) => {
        return (
          <CustomTextReg key={i} style={styles.ScrollableHeadingTabs__title}>
            {tabname}
          </CustomTextReg>
        );
      })}
    </ScrollView>
  );
};

export default ScrollableHeadingTabs;

const styles = StyleSheet.create({
  ScrollableHeadingTabs__mainCont: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  ScrollableHeadingTabs__title: {
    fontSize: 20,
    marginHorizontal: 20,
  },
});
