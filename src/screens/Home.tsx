import {View, FlatList, RefreshControl, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import PostCard from '../components/PostCard';

import {NavigationProp} from '@react-navigation/native';
import {PostCardPropType} from '../Types/Types';

const Home = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    console.log('Refreshing');
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const postCardProps = [
    {
      entityId: 21212,
      userName: 'One there',
      logoImage: 'https://reactjs.org/logo-og.png',
      postImage: 'https://reactjs.org/logo-og.png',
      postDescription: 'This is a post description',
      isLiked: true,
      isSaved: true,
      likes: 4500,
    },
    {
      entityId: 21213,
      userName: 'Two there',
      logoImage: 'https://reactjs.org/logo-og.png',
      postImage: 'https://reactjs.org/logo-og.png',
      postDescription: 'This is a post description',
      isLiked: false,
      isSaved: false,
      likes: 4500,
    },
    {
      entityId: 21214,
      userName: 'Three there',
      logoImage: 'https://reactjs.org/logo-og.png',
      postImage: 'https://reactjs.org/logo-og.png',
      postDescription: 'This is a post description',
      isLiked: true,
      isSaved: true,
      likes: 4500,
    },
    {
      entityId: 21215,
      userName: 'Four there',
      logoImage: 'https://reactjs.org/logo-og.png',
      postImage: 'https://reactjs.org/logo-og.png',
      postDescription: 'This is a post description',
      isLiked: true,
      isSaved: true,
      likes: 4500,
    },
  ];
  return (
    <View style={styles.home__mainCont}>
      {/* {postCardProps.map((postCardProp, i) => {
        return (
          <Fragment key={i}>
            <PostCard navigation={navigation} postCardProps={postCardProp} />
          </Fragment>
        );
      })} */}
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={postCardProps}
        renderItem={({item}: {item: PostCardPropType}) => (
          <PostCard navigation={navigation} postCardProps={item} />
        )}
        keyExtractor={(item: PostCardPropType) => item.entityId.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home__mainCont: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default Home;
