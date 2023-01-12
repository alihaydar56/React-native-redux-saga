import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {get_post_by_id_action} from '../../redux/posts/actions';
import {AppDispatch, RootState} from '../../redux/store';

const PostDetailScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const route = useRoute();
  const {postDetail} = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(get_post_by_id_action(route?.params?.postId));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight: 'bold', color: 'black'}}>{postDetail?.id}</Text>
      <Text style={{fontWeight: 'bold', color: 'black'}}>
        {postDetail?.title}
      </Text>
      <Text style={{fontWeight: '400', color: 'black'}}>
        {postDetail?.body}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: '10%', marginVertical: '4%'},
});

export default PostDetailScreen;
