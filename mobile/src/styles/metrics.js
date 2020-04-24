import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';


const { width, height } = Dimensions.get('window');

const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: Constants.navBarHeight,
  statusBarHeight: Constants.statusBarHeight,
  baseRadius: 3,
};

export default metrics;