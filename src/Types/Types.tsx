// import type {PropsWithChildren} from 'react';

export type AuthRootStackParamList = {
  Home: undefined;
  Explore: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  OTPVerification: undefined;
};

export type ExploreRootStackParamList = {
  ExploreMain: undefined;
  Search: {pageNo: number};
};

export type HomeRootStackParamList = {
  Feed: undefined;
  SearchUser: undefined;
};

export type PostCardPropType = {
  entity_id: number;
  userid: number;
  username: string;
  image_path: string;
  dp_path: string;
  caption: string;
  created_at: string;
  isLiked: boolean;
  isSaved: boolean;
  likes: number;
};

export type CommentType = {
  comment_id: number;
  entity_id: number;
  userid: number;
  comment: string;
  created_at: string;
  username: string;
  dp_path: string;
};

export type CommentsBottomSheetPropType = {
  comments: CommentType[];
  setComments: (comments: CommentType[]) => void;
  entity_id: number;
};

export type UserCardPropType = {
  dp_path: string;
  username: string;
  id: number;
};
