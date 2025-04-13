import type {PropsWithChildren} from 'react';

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

export type PostCardPropType = PropsWithChildren<{
  entityId: number;
  userName: string;
  logoImage: string;
  postImage: string;
  postDescription: string;
  isLiked: boolean;
  isSaved: boolean;
  likes: number;
}>;
