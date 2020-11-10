import React, { useEffect,useState } from 'react';
import { StyleSheet, View, Image, BackHandler, ImageBackground,Animated } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const SplashScreen = ({ navigation }) => {

  SplashScreen.navigationOptions = navigationData => {
    return { header: null }
  }
  const[  fadeAnimation,setFadeAnimation] =useState(new Animated.Value(0)) 
  useEffect(() => {

    fadeIn()
  // BackHandler.addEventListener('hardwareBackPress', function () { return true })
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
      <ImageBackground source={require('../Images/Materials-03.png')}
        style={styles.ImageView}>

<View style={styles.View}>

<Animated.View
          style={
            {
              opacity: fadeAnimation
            }
          }
        >
<Image source={require('../Images/Materials-04.png')}
  style={styles.Logo} />
  </Animated.View>

</View>
        </ImageBackground>
    </View>
  );


}



export default SplashScreen;


const styles = StyleSheet.create({
  container: {
  },

  ImageView: {
    width: wp('100%'), height: hp('100%')
  },

    View :
    {
        flexDirection : 'column'  , alignItems : 'center' , marginTop : hp('30%')
    },

    Logo :
    {
        width: 250 , height : 120 , marginTop : hp('6%') , marginBottom : hp('5%')
    } , 


});