/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import App2 from './App2';
import Cat from './Cat'

AppRegistry.registerComponent(appName, () => Cat);
