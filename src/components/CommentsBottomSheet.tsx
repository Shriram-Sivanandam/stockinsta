import React, {forwardRef, useMemo, useCallback, useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  //BottomSheetScrollView,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import Colors from '../constants/Colors';
import {CommentsBottomSheetPropType, CommentType} from '../Types/Types';
import CustomInput from './CustomInput';
import axios from 'axios';
import {BASE_URL} from '../frontend-api-service/Base';
import {useSelector} from 'react-redux';
import {selectUserID} from '../redux/userSlice';
import CommentCard from './CommentCard';

type Ref = BottomSheetModal;

const commentsBottomSheet = forwardRef<Ref, CommentsBottomSheetPropType>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['55%', '80%'], []);
    const [postComment, setPostComment] = useState('');
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
          comment: postComment,
        })
        .then(() => {
          setPostComment('');
        })
        .catch(err => {
          console.log(err);
        });
    };

    return (
      <BottomSheetModal
        ref={ref}
        enablePanDownToClose={true}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.commentsBottomSheet__background}
        handleIndicatorStyle={styles.commentsBottomSheet__handle}
        keyboardBlurBehavior="restore">
        {/* <BottomSheetScrollView> */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.commentsBottomSheet_avoiding}
          keyboardVerticalOffset={80} // Adjust depending on header height
        >
          <View style={styles.commentsBottomSheet__mainCont}>
            <BottomSheetFlatList
              data={props.comments}
              renderItem={({item}: {item: CommentType}) => {
                return <CommentCard comment={item} />;
              }}
              keyExtractor={(item: CommentType) => item.entity_id.toString()}
              contentContainerStyle={styles.commentsBottomSheet__flatlist}
            />
            <CustomInput
              icon2="send-outline"
              placeholder="Search and Add Instruments"
              value={postComment}
              setValue={setPostComment}
              keyboardType="default"
              autoFocus={false}
              onPressIcon2={onPostComment}
              mainContStyles={styles.mainContStyles}
            />
          </View>
        </KeyboardAvoidingView>
        {/* </BottomSheetScrollView> */}
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
  commentsBottomSheet_avoiding: {
    flex: 1,
  },
  commentsBottomSheet__mainCont: {
    marginTop: 30,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
  commentsBottomSheet__flatlist: {
    paddingBottom: 60,
  },
  mainContStyles: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
  },
});
