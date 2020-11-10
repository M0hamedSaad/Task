import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default {

  container: {
    flex: 0,

  },
  row:{
flexDirection: 'row-reverse',
  },
  viewIconBack:{
    marginTop: hp('5%'),
    marginRight: wp('2%'),
  },
  titleRow:{
    flexDirection: 'row-reverse',
    marginTop: hp('2%'),
    marginLeft: wp('5%'),


  },
  back: {
    width:25, height:25, 
  },
  viewIconArrow:{
    marginTop: hp('1%'),
    marginRight: wp('1.5%'),
    marginLeft: wp('1.5%'),
  },
  viewIconHelp:{
    marginTop: hp('.5%'),
    marginRight: wp('1.5%'),
    marginLeft: wp('1.5%'),
  },
  arrow: {
    width:20, height:18, 
  },
  header: {
    flexDirection: 'row-reverse',
    width: wp('87%'),
    height: hp('12%'),
    backgroundColor: '#EDF8EF',
    marginTop: 10,
    borderRadius: 15,
    marginLeft: wp('2%'),

  },
  txt:{
    fontFamily: 'ExpoArabicSemiBold',
    color:'#3F5845',
    fontSize: 18,
  },
  txt1:{
    fontFamily: 'ExpoArabicSemiBold',
    color:'#8FA595',
    fontSize: 16,
    marginRight: wp('5'),
  },
  titleRow1:{
    flexDirection: 'row-reverse',
    marginTop: hp('3.5%'),
    marginLeft: wp('5%'),


  },


};