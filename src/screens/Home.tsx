import {ScrollView} from 'react-native';
import React, {Fragment} from 'react';
import PostCard from '../components/PostCard';

import {NavigationProp} from '@react-navigation/native';

const Home = ({navigation}: {navigation: NavigationProp<any>}) => {
  const postCardProps = [
    {
      userName: 'One there',
      logoImage: 'https://reactjs.org/logo-og.png',
    },
    {
      userName: 'Two there',
      logoImage: 'https://reactjs.org/logo-og.png',
    },
    {
      userName: 'Three there',
      logoImage: 'https://reactjs.org/logo-og.png',
    },
    {
      userName: 'Four there',
      logoImage: 'https://reactjs.org/logo-og.png',
    },
    {
      userName: 'Five there',
      logoImage: 'https://reactjs.org/logo-og.png',
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {postCardProps.map((postCardProp, i) => {
        return (
          <Fragment key={i}>
            <PostCard navigation={navigation} postCardProps={postCardProp} />
          </Fragment>
        );
      })}
    </ScrollView>
  );
};

export default Home;
