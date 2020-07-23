import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList83848Navigator from '../features/NotificationList83848/navigator';
import Settings83847Navigator from '../features/Settings83847/navigator';
import Settings83839Navigator from '../features/Settings83839/navigator';
import UserProfile83837Navigator from '../features/UserProfile83837/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList83848: { screen: NotificationList83848Navigator },
Settings83847: { screen: Settings83847Navigator },
Settings83839: { screen: Settings83839Navigator },
UserProfile83837: { screen: UserProfile83837Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
