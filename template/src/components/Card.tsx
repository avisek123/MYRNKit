// External Library Import
import {Pressable, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';
// Internal Library Import
import {ProductsDataType} from 'src/types/blogsType';

const Card = ({item}: {item: ProductsDataType}) => {
  return (
    <Pressable
      hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
      style={{
        marginHorizontal: 10,
        marginTop: 10,
      }}
      android_ripple={{
        color: '#fff',
        borderless: false,
        foreground: true,
      }}>
      <View style={styles.item}>
        <FastImage
          style={styles.image}
          source={{uri: item?.thumbnail}}
          resizeMode="cover"
        />

        <View style={styles.wrapText}>
          <Text style={styles.title}>{`${item?.title}`}</Text>
          <Text numberOfLines={2} style={styles.descStyle}>
            {item?.description}
          </Text>
          <Text
            style={{
              ...styles.descStyle,
              fontWeight: '500',
              color: '#000',
              marginTop: 5,
            }}>
            ${item?.price}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,

    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    padding: 3,
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 3,
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center',
  },
  title: {
    color: '#000',
    fontWeight: '800',
    marginLeft: 10,
    width: 190,
  },
  descStyle: {
    color: 'gray',

    fontSize: 14,
    marginLeft: 10,
  },
  desc: {
    color: 'gray',

    fontSize: 14,
    marginLeft: 10,
  },
});
