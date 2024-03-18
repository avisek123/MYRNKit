import i18n from 'i18next';
import {I18nManager, DevSettings} from 'react-native';
import {setItem} from 'utils';

// Define the LanguageInterface type
interface LanguageInterface {
  sortName: string;
}

// Define the type for the changeLanguage function
type ChangeLanguageFunction = (lng: LanguageInterface) => void;

const changeLanguage: ChangeLanguageFunction = lng => {
  if (i18n.language === lng.sortName) {
    return;
  }
  setItem('defaultLanguage', lng);
  i18n.changeLanguage(lng.sortName);
  const isArabic = lng.sortName === 'ar';
  I18nManager.forceRTL(isArabic);
  DevSettings.reload();
};

export default changeLanguage;
