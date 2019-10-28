import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SearchBar, ResultsList } from '../components';
import useRestaurants from '../hooks/useRestaurants'

const styles = StyleSheet.create({});

export default () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, results, errorMessage] = useRestaurants();

  const onSearchChange = (val) => setSearchTerm(val);
  const onSubmit = () => searchApi(searchTerm);

  const filterResultsByPrice = (price) => results.filter(result => result.price === price);
  return (
    <>
      <SearchBar 
        searchTerm={searchTerm} 
        onSearchChange={onSearchChange} 
        onSubmit={onSubmit} 
      />
      { errorMessage ? <Text>{errorMessage}</Text> : null }
      <ScrollView>
        <ResultsList data={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList data={filterResultsByPrice('$$')} title="Bit Pricer" />
        <ResultsList data={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
}