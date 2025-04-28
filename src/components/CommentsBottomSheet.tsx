import React, {forwardRef, useMemo, useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import OHLCBar from './OHLCBar';

import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import Colors from '../constants/Colors';
import {CustomTextReg, CustomTextLight} from './CustomText';
import {CommentsBottomSheetPropType} from '../Types/Types';
import CustomInput from './CustomInput';
import axios from 'axios';
import {BASE_URL} from '../frontend-api-service/Base';
import {useSelector} from 'react-redux';
import {selectUserID} from '../redux/userSlice';

type Ref = BottomSheetModal;

const commentsBottomSheet = forwardRef<Ref, CommentsBottomSheetPropType>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['65%', '90%'], []);
    const [comment, setComment] = useState('');
    const userid = useSelector(selectUserID);

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

    const onPostComment = () => {
      axios
        .post(`${BASE_URL}/posts/addcomment`, {
          entity_id: props.entity_id,
          userid: userid,
          comment: comment,
        })
        .then(res => {
          console.log('this is the resulttttt on the new keyboard', res.data);
          setComment('');
        })
        .catch(err => {
          console.log(err);
        });
    };

    return (
      <BottomSheetModal
        ref={ref}
        enablePanDownToClose={true}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.commentsBottomSheet__background}
        handleIndicatorStyle={styles.commentsBottomSheet__handle}>
        <BottomSheetScrollView>
          <View style={styles.commentsBottomSheet__mainCont}>
            <CustomTextReg style={styles.commentsBottomSheet__stockName}>
              ONGC
            </CustomTextReg>
            <CustomTextLight>
              <CustomTextLight style={styles.commentsBottomSheet__subTitle}>
                NSE
              </CustomTextLight>
              <CustomTextLight
                style={styles.commentsBottomSheet__stockChangeNeg}>
                {' '}
                4036.45
              </CustomTextLight>
              <CustomTextLight style={styles.commentsBottomSheet__subTitle}>
                {' '}
                +15.44(+3.43%)
              </CustomTextLight>
            </CustomTextLight>
            <View style={styles.commentsBottomSheet__borderLine} />
            <OHLCBar />
          </View>
          <View style={styles.commentsBottomSheet__searchBar}>
            <CustomInput
              icon2="send-outline"
              placeholder="Search and Add Instruments"
              value={comment}
              setValue={setComment}
              keyboardType="default"
              autoFocus={false}
              onPressIcon2={onPostComment}
            />
          </View>
        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  },
);

export default commentsBottomSheet;

const styles = StyleSheet.create({
  commentsBottomSheet__background: {
    backgroundColor: Colors.background,
  },
  commentsBottomSheet__handle: {
    backgroundColor: Colors.secondaryBackground,
  },
  commentsBottomSheet__mainCont: {
    width: '90%',
    alignSelf: 'center',
  },
  commentsBottomSheet__stockName: {
    fontSize: 20,
  },
  commentsBottomSheet__subTitle: {
    fontSize: 15,
  },
  commentsBottomSheet__stockChangePos: {
    color: Colors.greenColor,
    fontSize: 15,
  },
  commentsBottomSheet__stockChangeNeg: {
    color: Colors.redColor,
    fontSize: 15,
  },
  commentsBottomSheet__borderLine: {
    borderBottomWidth: 1,
    borderColor: Colors.secondaryBackground,
    marginVertical: 15,
  },
  commentsBottomSheet__searchBar: {
    marginTop: 30,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
});
