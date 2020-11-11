import React, { useEffect,useState } from 'react';
import { StyleSheet, View, Text , Animated } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const SplashScreen = ({ navigation }) => {

  SplashScreen.navigationOptions = navigationData => {
    return { header: null }
  }
  const[  fadeAnimation,setFadeAnimation] =useState(new Animated.Value(0)) 
  useEffect(() => {

    fadeIn()
   console.ignoredYellowBox = [
    'Setting a timer'
    ];
    console.disableYellowBox = true;
        setTimeout(function () {
          navigation.navigate('HomeScreen');
  
        }, 4000); 

  }, []);
 const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 3000
    }).start();
  };

  return (
    <View style={styles.container}>
  
<View style={styles.View}>

<Animated.View
          style={
            {
              opacity: fadeAnimation
            }
          }
        >
    <Text style = {styles.txt }> TASK </Text>      
  </Animated.View>

</View>
    </View>
  );


}



export default SplashScreen;


const styles = StyleSheet.create({

    View :
    {
        flexDirection : 'column'  , alignItems : 'center' , marginTop : hp('40%')
    },

    Logo :
    {
        width: 250 , height : 120 , marginTop : hp('6%') , marginBottom : hp('5%')
    } , 
    txt : 
    {
      fontFamily: 'ExpoArabicSemiBold',
  
      fontSize: 25,
    }

});