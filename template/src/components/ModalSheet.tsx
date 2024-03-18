// External Library Import
import {useTranslation} from 'react-i18next';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// Internal Library Import
import {ImagePath} from '../constant';
import {i18nHelper} from 'utils';
import {AppText} from './core';
interface IModalSheet {
  isVisible: boolean;
  onClose: () => void;
}
const langugaeData = [
  {name: 'English', sortName: 'en'},
  {name: 'Arabic', sortName: 'ar'},
  {name: 'French', sortName: 'fr'},
];

const ModalSheet = ({isVisible, onClose}: IModalSheet) => {
  const {i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;

  console.log('selectedLanguageCode', selectedLanguageCode);
  return (
    <Modal animationType="slide" transparent visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View />
          <View style={styles.horizontalLine} />
          <Pressable onPress={onClose}>
            <Image source={ImagePath.icClose} />
          </Pressable>
        </View>
        <>
          <View style={styles.modalView}>
            <View>
              <AppText
                style={{
                  fontWeight: '600',
                  color: '#000',
                }}
                text="CHANGE_LANGUAGE"
              />
              {langugaeData?.map(item => {
                const selectedLanguage = item.sortName === selectedLanguageCode;

                return (
                  <TouchableOpacity
                    onPress={() => {
                      i18nHelper(item);
                    }}
                    style={{
                      marginTop: '13%',
                    }}
                    key={item?.sortName}>
                    <AppText
                      text={item?.name}
                      isDynamicText
                      style={{
                        fontSize: 15,
                        color: selectedLanguage ? 'red' : '#000',
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <View></View>
          </View>
        </>
      </View>
    </Modal>
  );
};

export default ModalSheet;

const styles = StyleSheet.create({
  container: {
    minHeight: '25%',
    marginTop: 'auto',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    height: 6,
    width: 80,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: 'grey',
  },
  modalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
