import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import SerieDetail from '../screens/SerieDetail';
import Favourites from '../screens/Favourites';

const Routes = createStackNavigator({
  Home: Home,
  Details: SerieDetail,
  Favourites: Favourites,
},
  {
    initialRouteName: 'Home',
  });

export default Routes;