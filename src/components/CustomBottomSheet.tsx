import React, {forwardRef, useMemo, useCallback} from 'react';
import {Text, View} from 'react-native';

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
        <View>
          <Text style={{color: '#fff'}}>Awesome 🎉</Text>
          <Text style={{color: '#fff'}}>{props.title}</Text>
          <Text style={{color: '#fff'}}>Awesome 🎉</Text>
          <Text style={{color: '#fff'}}>{props.title}</Text>
          <Text style={{color: '#fff'}}>Awesome 🎉</Text>
          <Text style={{color: '#fff'}}>{props.title}</Text>
          <Text style={{color: '#fff'}}>Awesome 🎉</Text>
          <Text style={{color: '#fff'}}>{props.title}</Text>
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default CustomBottomSheet;
