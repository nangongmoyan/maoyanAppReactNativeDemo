/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  zh_CN: {
    common: require('./src/i18n/zh-CN'),
  },
  en_US: {
    common: require('./src/i18n/en-US'),
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en_US',
  compatibilityJSON: 'v3',

  // have a common namespace used around the full app
  ns: ['common'],
  // defaultNS: 'common',

  // cache: {
  //   enabled: true,
  // },

  // react: {
  //   useSuspense: true,
  // },
});
AppRegistry.registerComponent(appName, () => App);
