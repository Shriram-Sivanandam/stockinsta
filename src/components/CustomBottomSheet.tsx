import React, {forwardRef, useMemo, useCallback} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import OHLCBar from './OHLCBar';

import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
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
          <Text style={styles.customBottomSheet__stockName}>ONGC</Text>
          <Text>
            <Text style={styles.customBottomSheet__subTitle}>NSE</Text>
            <Text style={styles.customBottomSheet__stockChangeNeg}>
              {' '}
              4036.45
            </Text>
            <Text style={styles.customBottomSheet__subTitle}>
              {' '}
              +15.44(+3.43%)
            </Text>
          </Text>
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
    backgroundColor: '#000',
  },
  customBottomSheet__handle: {
    backgroundColor: '#4b4c4d',
  },
  customBottomSheet__mainCont: {
    width: '90%',
    alignSelf: 'center',
  },
  customBottomSheet__stockName: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins Regular',
  },
  customBottomSheet__subTitle: {
    color: '#fff',
    fontSize: 15,
  },
  customBottomSheet__stockChangePos: {
    color: '#39a62b',
    fontSize: 15,
  },
  customBottomSheet__stockChangeNeg: {
    color: '#ff0000',
    fontSize: 15,
  },
  customBottomSheet__borderLine: {
    borderBottomWidth: 1,
    borderColor: '#4b4c4d',
    marginVertical: 15,
  },
});
