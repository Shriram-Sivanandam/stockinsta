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
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
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
      backgroundStyle={{backgroundColor: '#000'}}
      handleIndicatorStyle={{backgroundColor: '#4b4c4d'}}>
      <BottomSheetScrollView>
        <View style={styles.customBottomSheet__mainCont}>
          <Text style={{color: '#fff'}}>ONGC</Text>
          <Text style={{color: '#fff'}}>NSE 4036.45 +15.44(+3.43%)</Text>
          <OHLCBar />
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default CustomBottomSheet;

const styles = StyleSheet.create({
  customBottomSheet__mainCont: {
    width: '90%',
    alignSelf: 'center',
  },
});
