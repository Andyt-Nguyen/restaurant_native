import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ({title, data}) => {
  console.log(data.length)
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        data={data}
        keyExtractor={res => res.id}
        renderItem={({item}) => <Text>{item.name}</Text>}

      />
    </View>
  )
}