import i18n from 'i18next';
import { maoYan } from 'maoyan-request';
import { initReactI18next } from 'react-i18next';
import { AppRegistry } from 'react-native';
import 'react-native-get-random-values';
import { name as appName } from './app.json';
import App from './src/main';

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
  fallbackLng: 'zh_CN',
  compatibilityJSON: 'v3',

  ns: ['common'],
});

maoYan.setenv('release');

AppRegistry.registerComponent(appName, () => App);
