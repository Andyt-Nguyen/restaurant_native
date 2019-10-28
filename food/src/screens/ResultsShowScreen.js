import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import useSingleBussiness from '../hooks/useSingleBusiness';

const styles = StyleSheet.create({});

export default ({ navigation }) => {
  const [getBussinessPhotos, photos] = useSingleBussiness();
  const id = navigation.getParam('id');

  useEffect(() => {
    getBussinessPhotos(id)
  }, []);

  console.log(photos);
  return (
    <FlatList
      data={photos}
      keyExtractor={photo => photo}
      renderItem={({item}) => <Image source={{ uri: item}} style={{ height: 200, width: 270}} />}
    />
  )
}