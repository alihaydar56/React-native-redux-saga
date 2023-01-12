import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect, useDispatch, useSelector} from 'react-redux';
import PostCard from '../../componets/post/PostCard';
import {get_posts_actions} from '../../redux/posts/actions';
import {AppDispatch, RootState} from '../../redux/store';

const HomeView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const loading = useSelector((state: RootState) => state.posts?.loading);
  useEffect(() => {
    dispatch(get_posts_actions());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={posts}
          contentContainerStyle={{marginTop: '3%'}}
          renderItem={({item, index}) => {
            return <PostCard {...item} />;
          }}
          maxToRenderPerBatch={Dimensions.get('window').height}
          initialNumToRender={5}
        />
      )}
    </SafeAreaView>
  );
};

const HomeScreen = connect()(HomeView);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

export default HomeScreen;
