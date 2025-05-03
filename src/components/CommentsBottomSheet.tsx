import React, {forwardRef, useMemo, useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {BottomSheetModal, BottomSheetFlatList} from '@gorhom/bottom-sheet';
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
    const snapPoints = useMemo(() => ['50%', '90%'], []);
    const [postComment, setPostComment] = useState('');
    const userid = useSelector(selectUserID);

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
        backgroundStyle={styles.commentsBottomSheet__background}
        handleIndicatorStyle={styles.commentsBottomSheet__handle}
        keyboardBlurBehavior="restore">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.commentsBottomSheet_avoiding}
          keyboardVerticalOffset={80}>
          <View style={styles.commentsBottomSheet__mainCont}>
            <CustomInput
              icon1="add-outline"
              icon2="send-outline"
              placeholder="Search and Add Instruments"
              value={postComment}
              setValue={setPostComment}
              keyboardType="default"
              autoFocus={false}
              onPressIcon2={onPostComment}
              mainContStyles={styles.mainContStyles}
            />
            <BottomSheetFlatList
              data={props.comments}
              renderItem={({item}: {item: CommentType}) => (
                <CommentCard comment={item} />
              )}
              keyExtractor={(item: CommentType) => item.comment_id.toString()}
              contentContainerStyle={styles.commentsBottomSheet__flatlist}
            />
          </View>
        </KeyboardAvoidingView>
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
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  commentsBottomSheet__flatlist: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  mainContStyles: {
    marginBottom: 20,
  },
});
