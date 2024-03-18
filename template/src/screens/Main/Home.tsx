// External Library Import
import {SafeAreaView, StyleSheet} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
// Internal Library Import
import {useGetBlogsQuery} from 'services';
import {Loader} from 'components/core';
import {ProductsDataType} from 'types';
import {AppBar, Card} from 'components';

const Home = () => {
  const {data, error, isLoading} = useGetBlogsQuery(undefined);
  console.log('data', data);
  const renderItem = ({item}: {item: ProductsDataType}) => {
    // Render each item here
    return <Card item={item} />;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppBar />
      {isLoading ? (
        <Loader />
      ) : (
        <FlashList
          data={data?.products}
          estimatedItemSize={50}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headWrapper: {
    backgroundColor: '#FFA400',
    elevation: 7,
    padding: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
});
