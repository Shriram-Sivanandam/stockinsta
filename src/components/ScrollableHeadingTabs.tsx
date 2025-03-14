import {StyleSheet, ScrollView, Pressable, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

import {CustomTextReg} from './CustomText';
import Colors from '../constants/Colors';

type ScrollableHeadingTabsType = PropsWithChildren<{
  tabnames: Array<string>;
  selectedPage: number;
  setSelectedPage: (selectedPage: number) => void;
}>;

const ScrollableHeadingTabs = (props: ScrollableHeadingTabsType) => {
  return (
    <ScrollView
      horizontal
      style={styles.ScrollableHeadingTabs__mainCont}
      showsHorizontalScrollIndicator={false}>
      {props.tabnames.map((tabname, i) => {
        return (
          <Pressable key={i} onPress={() => props.setSelectedPage(i)}>
            <CustomTextReg
              style={
                props.selectedPage === i
                  ? styles.ScrollableHeadingTabs__title
                  : styles.ScrollableHeadingTabs__nontitle
              }>
              {tabname}
            </CustomTextReg>

            {props.selectedPage === i && (
              <View style={styles.ScrollableHeadingTabs__underline} />
            )}
          </Pressable>
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
  ScrollableHeadingTabs__nontitle: {
    fontSize: 20,
    marginHorizontal: 20,
    color: Colors.secondaryText,
  },
  ScrollableHeadingTabs__underline: {
    height: 3,
    width: '80%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 5,
  },
});
