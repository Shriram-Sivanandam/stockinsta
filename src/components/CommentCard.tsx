import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CommentType} from '../Types/Types';
import {CustomTextReg} from './CustomText';

const CommentCard = ({comment}: {comment: CommentType}) => {
  return (
    <View style={{padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
      <CustomTextReg>{comment.comment}</CustomTextReg>
      <CustomTextReg>{comment.username}</CustomTextReg>
      <CustomTextReg>{comment.created_at}</CustomTextReg>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({});
