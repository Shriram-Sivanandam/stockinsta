import React, {forwardRef, useMemo, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import OHLCBar from './OHLCBar';

import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import Colors from '../constants/Colors';
import {CustomTextReg, CustomTextLight} from './CustomText';
// export type Ref = BottomSheetModal;

interface Props {
  title: string;
}

type Ref = BottomSheetModal;

const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const renderBackdrop = useCallback(
    (backdropProps: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...backdropProps}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={ref}
      enablePanDownToClose={true}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.customBottomSheet__background}
      handleIndicatorStyle={styles.customBottomSheet__handle}>
      <BottomSheetScrollView>
        <View style={styles.customBottomSheet__mainCont}>
          <CustomTextReg style={styles.customBottomSheet__stockName}>
            ONGC
          </CustomTextReg>
          <CustomTextLight>
            <CustomTextLight style={styles.customBottomSheet__subTitle}>
              NSE
            </CustomTextLight>
            <CustomTextLight style={styles.customBottomSheet__stockChangeNeg}>
              {' '}
              4036.45
            </CustomTextLight>
            <CustomTextLight style={styles.customBottomSheet__subTitle}>
              {' '}
              +15.44(+3.43%)
            </CustomTextLight>
          </CustomTextLight>
          <View style={styles.customBottomSheet__borderLine} />
          <OHLCBar />
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default CustomBottomSheet;

const styles = StyleSheet.create({
  customBottomSheet__background: {
    backgroundColor: Colors.background,
  },
  customBottomSheet__handle: {
    backgroundColor: Colors.secondaryBackground,
  },
  customBottomSheet__mainCont: {
    width: '90%',
    alignSelf: 'center',
  },
  customBottomSheet__stockName: {
    fontSize: 20,
  },
  customBottomSheet__subTitle: {
    fontSize: 15,
  },
  customBottomSheet__stockChangePos: {
    color: Colors.greenColor,
    fontSize: 15,
  },
  customBottomSheet__stockChangeNeg: {
    color: Colors.redColor,
    fontSize: 15,
  },
  customBottomSheet__borderLine: {
    borderBottomWidth: 1,
    borderColor: Colors.secondaryBackground,
    marginVertical: 15,
  },
});
