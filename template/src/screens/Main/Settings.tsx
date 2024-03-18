// External Library Import
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
// Internal Library Import
import {AppBar, ModalSheet} from 'components';
import {useBasicFunctions} from 'hooks';
import {AppText} from 'components/core';

const Settings = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const {handleLogout} = useBasicFunctions();
  const SettingsData = [
    {
      id: 1,
      name: 'Language',
      onPress: () => {
        setOpenModal(true);
      },
    },
    {
      id: 2,
      name: 'Logout',
      onPress: () => {
        handleLogout();
      },
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBar text={'Settings'} />
      {SettingsData?.map(item => (
        <React.Fragment key={item?.id}>
          <TouchableOpacity
            onPress={() => item?.onPress()}
            style={{
              marginHorizontal: 10,
              marginTop: 15,
            }}>
            <AppText text={item?.name} style={styles.textColor} />
          </TouchableOpacity>
          <View style={styles.separator} />
        </React.Fragment>
      ))}
      {openModal ? (
        <ModalSheet isVisible={openModal} onClose={() => setOpenModal(false)} />
      ) : null}
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  separator: {
    height: 0.8,
    backgroundColor: 'gray',
    marginTop: 5,
  },
  textColor: {
    fontSize: 15,
    color: '#000',
    fontWeight: '700',
  },
});
