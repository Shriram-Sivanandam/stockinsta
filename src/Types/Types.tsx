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
