import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IPost} from '../../interfaces';

const {width, height} = Dimensions.get('window');

const PostCard = (props: IPost) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const _onPress = () => {
    navigation.navigate('PostDetailScreen', {postId: props.id});
  };

  return (
    <TouchableOpacity style={styles.card} onPress={_onPress}>
      <Text style={{fontWeight: 'bold', color: 'black'}}>{props.id}</Text>
      <Text style={{fontWeight: 'bold', color: 'black'}}>{props.title}</Text>
      <Text style={{fontWeight: '400', color: 'black'}}>{props.body}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    minHeight: height * 0.2,
    backgroundColor: 'white',
    borderRadius: 11,
    marginBottom: '3%',
    alignSelf: 'center',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
  },
});

export default PostCard;
