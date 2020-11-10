
import { createAppContainer } from 'react-navigation' ;
import { createStackNavigator  } from '../Packages/react-navigation-stack';

import HomeScreen from '../Screens/Components/HomeScreen/index';
import SplashScreen from '../Screens/SplashScreen';


const Navigator = createStackNavigator({
  
    SplashScreen:
    {
        screen: SplashScreen, navigationOptions: {
            header: null
        }
    },
    HomeScreen :
    {
       screen :  HomeScreen ,  
    },  
  
  
});


export default createAppContainer(  Navigator );

