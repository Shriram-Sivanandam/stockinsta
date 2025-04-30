import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {CommentType} from '../Types/Types';
import {CustomTextReg, CustomTextLight} from './CustomText';
import Colors from '../constants/Colors';

const CommentCard = ({comment}: {comment: CommentType}) => {
  return (
    <View style={styles.commentCard__mainCont}>
      <Image source={{uri: comment.dp_path}} style={styles.commentCard__logo} />
      <View>
        <CustomTextReg>{comment.username}</CustomTextReg>
        <CustomTextReg style={styles.commentCard__comment}>
          {comment.comment}
        </CustomTextReg>
        <CustomTextLight style={styles.commentCard__reply}>
          Reply
        </CustomTextLight>
      </View>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  commentCard__mainCont: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  commentCard__logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  commentCard__comment: {
    flex: 1,
    flexShrink: 1,
    flexWrap: 'wrap',
    maxWidth: '90%',
  },
  commentCard__reply: {
    color: Colors.secondaryText,
    marginTop: 5,
    marginBottom: 20,
  },
});
