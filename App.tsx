/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/components/login/Login';
import Register from './src/components/register/Register';

const AppNavigator = createStackNavigator(
  {
    Login,
    Register
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);;
