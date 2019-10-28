import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
});

export default withNavigation(({ title, data, navigation }) => {
  if(!data.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        data={data}
        keyExtractor={res => res.id}
        renderItem={({item}) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
            <ResultsDetail 
              result={item} 
            />
          </TouchableOpacity>)}
        showsHorizontalScrollIndicator={false}

      />
    </View>
  )
})