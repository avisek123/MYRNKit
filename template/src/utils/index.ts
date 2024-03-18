import i18next from 'i18next';
import {Dimensions} from 'react-native';
import {MMKV} from 'react-native-mmkv';

export const DimensionWidth = Dimensions.get('window').width;
export const DimensionHeight = Dimensions.get('window').height;

const storage = new MMKV();

export const setItem = <T>(key: string, value: T) => {
  storage.set(key, JSON.stringify(value) as string);
};

export const getItem = <T>(key: string): T | null => {
  const storedValue = storage.getString(key);
  console.log('storedVal', storedValue);
  if (storedValue !== undefined && storedValue !== null) {
    return JSON.parse(storedValue) as T;
  }
  return null;
};

export const removeItem = (key: string) => {
  storage.delete(key);
};

// get default language
export const defaultLanguage = getItem('defaultLanguage');
if (defaultLanguage) {
  // @ts-expect-error : will handle later
  i18next.changeLanguage(defaultLanguage.sortName);
}
export {default as i18nHelper} from './i18nHelper';
