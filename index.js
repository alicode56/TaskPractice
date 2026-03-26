/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';


//new Appprochnage here if i want chnages when sonething then i will change in apppro and then it will reflect in app.js
import AppPro from './AppPro';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppPro);
