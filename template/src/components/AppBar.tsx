// External Library Import
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import React from 'react';
// Internal Library Import
import {MainNavigationProps} from 'src/types/allRoutes';
import {ImagePath} from '../constant';
import {AppText} from './core';
interface AppBarProps {
  text?: string;
}
const AppBar = ({text}: AppBarProps) => {
  const {navigate, goBack} = useNavigation<MainNavigationProps>();
  return (
    <>
      <View style={styles.headWrapper}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <FastImage
            style={{height: 40, width: 40}}
            source={{
              uri: 'https://img.freepik.com/premium-vector/hr-manager-icon-simple-hr-manager-colored-flat-icon-isolated-white-background_176841-91787.jpg?w=1380',
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <AppText text={text || 'Products_Gallery'} style={styles.title} />

          <TouchableOpacity
            onPress={() => {
              if (text === 'Settings') {
                goBack();
              } else {
                navigate('Settings');
              }
            }}
            style={{
              alignSelf: 'center',
            }}>
            <Image
              style={{
                tintColor: '#000',
              }}
              source={
                text === 'Settings' ? ImagePath.icBack : ImagePath.icSetting
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  headWrapper: {
    backgroundColor: '#fff',
    elevation: 7,
    padding: 10,
    borderBottomWidth: 0.5,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
  },
});
