import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from 'react-native';
export default {

  container: {
    flex: 0,
  },
  row: Platform.OS == "ios" ?
  {
    flexDirection: 'row-reverse', marginTop : hp('5%')

  }:
  {
    flexDirection: 'row-reverse',
  },
  viewIconBack: {
    marginTop: hp('6%'),
    marginRight: wp('2%'),
  },
  titleRow: {
    flexDirection: 'row-reverse',
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
  },
  back: {
    width: wp('4%'), height: hp('3%'),
  },
  details: Platform.OS == "ios" ?
  {
    width: wp('6%'), height: hp('6%'), marginRight: wp('2%'), marginTop: hp('0%')
  }:
  {
    width: wp('6%'), height: hp('6%'), marginRight: wp('2%'), marginTop: hp('.5%')
  },
  viewIconArrow: {
    marginTop: hp('1%'),
    marginRight: wp('1.5%'),
    marginLeft: wp('1.5%'),
  },
  viewIconArrow2: {
    marginTop: hp('-.5%'),
    marginRight: wp('1.5%'),
    marginLeft: wp('1.5%'),
  },

  arrow: Platform.OS == "ios" ?
  {
    width: wp('4%'), height: hp('3%'), marginTop: hp('0%'),
  }:
  {
    width: wp('4%'), height: hp('3%'), marginTop: hp('.5%'),
  },
  header: Platform.OS == "ios" ? 
  {
    flexDirection: 'row-reverse',
    width: wp('90%'),
    height: hp('10%'),
    backgroundColor: '#EDF8EF',
    marginTop: 10,
    borderRadius: 15,
    marginLeft: wp('2%'),
  }:

    {
      flexDirection: 'row-reverse',
      width: wp('90%'),
      height: hp('12%'),
      backgroundColor: '#EDF8EF',
      marginTop: 10,
      borderRadius: 15,
      marginLeft: wp('2%'),

  },
  txt: Platform.OS == "ios" ?
    {
      color: '#3F5845',
      fontSize: 16, 
    } 
    :
    {
      fontFamily: 'ExpoArabicSemiBold',
      color: '#3F5845',
      fontSize: 16,
    },
  txt1: Platform.OS == "ios" ?
    {
      color: '#8FA595',
      fontSize: 16,
      marginRight: wp('5'),
    } :
    {
      fontFamily: 'ExpoArabicSemiBold',
      color: '#8FA595',
      fontSize: 16,
      marginRight: wp('5'),
    },
  titleRow1:
  {
    flexDirection: 'row',
    marginTop: hp('3.5%'),
    marginRight: wp('2%')
  },

  titleRow2: Platform.OS == "ios" ?
  {
    flexDirection: 'row-reverse',
    marginTop: hp('1%'),
    width: wp('100'),
    height: hp('6'),
    borderBottomWidth: wp('.5'),
    borderTopWidth: wp('.5'),
    justifyContent: 'space-between',
    borderBottomColor: '#DBE2DD',
    borderTopColor: '#DBE2DD',
    marginTop: hp('1%'),
  }:
  {
    flexDirection: 'row-reverse',
    marginTop: hp('1%'),
    width: wp('100'),
    height: hp('8'),
    borderBottomWidth: wp('.5'),
    borderTopWidth: wp('.5'),
    justifyContent: 'space-between',
    borderBottomColor: '#DBE2DD',
    borderTopColor: '#DBE2DD',
    marginTop: hp('1%'),

  },
  txt2: Platform.OS == "ios" ?
    {
      marginTop: hp('2%'),
      color: '#8FA595',
      fontSize: 14,
      marginRight: wp('5%'),
    } :
    {
      fontFamily: 'ExpoArabicSemiBold',
      marginTop: hp('2%'),
      color: '#8FA595',
      fontSize: 14,
      marginRight: wp('5%'),
    },

  cancelRequestView: {
    marginTop: hp('1.5'),
    marginLeft: wp('4'),
  },

  Table: {
    flexDirection: 'row-reverse',
    width: wp('100'),
    height: hp('6%'),
    borderBottomWidth: wp('1'),
    borderBottomColor: '#3DA954',
    borderTopColor: '#3DA954',
    marginTop: hp('1%'),

  },
  line: {
    width: wp('.5'),
    backgroundColor: '#DBE2DD',
    marginTop: hp(-1),
  },
  viewIconDown: {
    marginTop: hp('1%'),
    marginRight: wp('2%'),
    marginLeft: wp('2%'),
  },
  viewIconDown1: {
    marginTop: hp('2%'),
    marginRight: wp('2%'),
    marginLeft: wp('2%'),
  },
  txtViewTable: Platform.OS == "ios" ?
  {
    marginTop: hp('1%'),
    marginRight: wp('5%'),
    marginLeft: wp('3%'),
  }:
  {
    marginTop: hp('1%'),
    marginRight: wp('5%'),
    marginLeft: wp('1.5%'),
  },
  txt3: Platform.OS == "ios" ?
    {
      color: '#3F5845',
      fontSize: 14,
    } :
    {
      fontFamily: 'ExpoArabicSemiBold',
      color: '#3F5845',
      fontSize: 14,
    },
  icontable: {
    width: wp('4%'), height: hp('3%'),

  },
  star: Platform.OS == "ios" ?
  {
    width: wp('5.5%'), height: hp('5%'),
    marginTop: hp('-.5%'), marginLeft: wp('.5%')
  }:
  {
    width: wp('5.5%'), height: hp('5%'),
    marginTop: hp('0%'), marginLeft: wp('.5%')
  },
  btn: Platform.OS == "ios" ?
    {
      backgroundColor: 'white',
      height: 60,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      shadowColor: 'white',
      marginTop: hp('1%'),
      shadowOffset: {
        height: 6,
      },
      shadowOpacity: 3,
      shadowRadius: 7.49,
    } :
    {
      backgroundColor: 'white',
      height: 60,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      shadowColor: 'white',
      marginTop: hp('1%'),
      shadowOffset: {
        height: 6,
      },
      shadowOpacity: 3,
      shadowRadius: 7.49,
    },

  ViewImageIssue: {
    flex: 1,
    width: '100%',
  },
  menuBox: Platform.OS == "ios" ?
  {
    backgroundColor: "white",
    height: hp('27%'),
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#1a000000',
    borderWidth: 2,
    shadowColor: 'white',
    shadowOffset: { width: 1, height: 1, },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,
    elevation: 2,
    marginVertical: 5,
    flexBasis: '46%',
    marginHorizontal: 5,
  }:
  {
    backgroundColor: "white",
    height: hp('30%'),
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#1a000000',
    borderWidth: 2,
    shadowColor: 'white',
    shadowOffset: { width: 1, height: 1, },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,
    elevation: 2,
    marginVertical: 5,
    flexBasis: '46%',
    marginHorizontal: 5,
  },

  view1:
  {
    flexDirection: 'row', marginLeft: wp('3%'), marginTop: hp('2%'),
  },

  txt4: Platform.OS == "ios" ?
    {
      color: '#8FA595', marginTop: hp('.5%'), fontSize: 16,
    } :
    {
      color: '#8FA595', marginTop: hp('.5%'), fontSize: 16, fontFamily: 'ExpoArabicSemiBold',
    },

  col: Platform.OS == "ios" ?
  {
    flexDirection: 'column' , marginTop  : hp('1%')
  }:
  {
    flexDirection: 'column'
  },

  num: Platform.OS == "ios" ?
    {
      color: '#3DA954', fontSize: 22, marginTop: hp('-.5%'),
    } :
    {
      color: '#3DA954', fontSize: 22, fontFamily: 'ExpoArabicSemiBold', marginTop: hp('-.5%'),
    },

  num1: Platform.OS == "ios" ?
    {
      color: '#8FA595', marginLeft: wp('-4%'), marginTop: hp('-.5%'),
      fontSize: 14,
      textDecorationLine: 'line-through'
    } :
    {
      color: '#8FA595', marginLeft: wp('-4%'), marginTop: hp('-1%'),
      fontSize: 14, fontFamily: 'ExpoArabicSemiBold',
      textDecorationLine: 'line-through'
    },
  view2:
  {
    flexDirection: 'row',
  },

  view3:
  {
    flexDirection: 'column', marginLeft: wp('13%')
  },

  txt5: Platform.OS == "ios" ?
    {
      fontSize: 18, color: '#3F5845',
    } :
    {
      fontSize: 18, color: '#3F5845', fontFamily: 'ExpoArabicSemiBold',
    },
  view4: Platform.OS == "ios" ?
  {
    flexDirection: 'row', marginLeft: wp('20%'), marginTop : hp('1%')
  }:
  {
    flexDirection: 'row', marginLeft: wp('20%'),
  },
  txt6: Platform.OS == "ios" ?
    {
      color: '#8FA595', fontSize: 18, marginTop: hp('-1%')

    } :
    {
      color: '#8FA595', fontSize: 18, fontFamily: 'ExpoArabicSemiBold', marginTop: hp('-1%')
    },
  user: Platform.OS == "ios" ?
  {
    width: wp('22%'), height: hp('10%')

  }:
  {
    width: wp('20%'), height: hp('10%')
  },

  view5:
  {
    marginLeft: wp('2%'), marginTop: hp('-1%')
  },

  view6:
  {
    flexDirection: 'row', alignItems: 'center',
    width: wp('90%'),
    height: hp('8%'),
    backgroundColor: '#F1F4F2',
    borderRadius: 10,
    marginLeft: wp('1.5%'),
    marginTop: hp('2%'),
  },
  view7:
  {
    marginLeft: wp('3%'), flexDirection: 'row',
  },
  icon: Platform.OS == "ios" ?
  {
    width: wp('6%'), height: hp('6%'), marginRight: wp('2%'), marginTop: hp('.5%'),
  }:
  {
    width: wp('6%'), height: hp('6%'), marginRight: wp('2%'), marginTop: hp('1%'),
  },
  giftIcon:
  {
    width: 26, height: 27,
  },

  txt7: Platform.OS == "ios" ?
    {
      color: '#8FA595', marginTop: hp('.5%'),
      fontSize: 16, marginLeft: wp('1%'), marginRight: wp('1%')
    } :
    {
      fontFamily: 'ExpoArabicSemiBold',
      color: '#8FA595', marginTop: hp('.5%'),
      fontSize: 16, marginLeft: wp('1%'), marginRight: wp('1%')
    },
  txt8: Platform.OS == "ios" ?
    {
      color: '#3F5845', marginTop: hp('.5%'),
      fontSize: 16, marginLeft: wp('15%')
    } :
    {
      fontFamily: 'ExpoArabicSemiBold',
      color: '#3F5845', marginTop: hp('.5%'),
      fontSize: 16, marginLeft: wp('6%')
    },

  icon1: Platform.OS == "ios" ?
  {
    width: wp('5.5%'), height: hp('5%'), marginTop: hp('1%'), marginRight: wp('2%')
  }:
  {
    width: wp('5.5%'), height: hp('5%'), marginTop: hp('1.5%'), marginRight: wp('2%')
  },
  icon2: Platform.OS == "ios" ?
  {
    width: wp('4%'), height: hp('3.5%'), marginTop: hp('1%'),

  }:
  {
    width: wp('4%'), height: hp('3.5%'), marginTop: hp('1.5%'),
  },

  view8: Platform.OS == "ios" ?
  {
    flexDirection: 'row', alignItems: 'center',
    width: wp('90%'),
    height: hp('8%'),
    marginLeft: wp('4%'),
    marginTop: hp('-1%'),
  }:
  {
    flexDirection: 'row', alignItems: 'center',
    width: wp('90%'),
    height: hp('8%'),
    marginLeft: wp('4%'),
    marginTop: hp('0%'),
  },

  txt9: Platform.OS == "ios" ?
    {
      color: '#8FA595', marginTop: hp('0%'),
      fontSize: 16, marginLeft: wp('33%')
    } :
    {
      fontFamily: 'ExpoArabicSemiBold',
      color: '#8FA595', marginTop: hp('0%'),
      fontSize: 16, marginLeft: wp('29%')
    },
  footer: {
    position: 'absolute',
    width: '100%',
    height: 120,
    marginTop: hp('87'),
    zIndex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 10,
    elevation: 5,
  },
  height: {
    height: hp('11'),
  },
  btnFooter:
  {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    width: 142,
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    shadowColor: '#DEE5E1',
    marginTop: hp('1%'),
    marginLeft: hp('1%'),

    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,

    marginBottom: 10,
    elevation: 1,
  },
  txt10: Platform.OS == "ios" ?
    {
      color: '#3DA954', marginTop: hp('.5%'),
      fontSize: 14, marginRight: wp('3%')
    } :
    {
      fontFamily: 'ExpoArabicSemiBold',
      color: '#3DA954', marginTop: hp('.5%'),
      fontSize: 14, marginRight: wp('3%')
    },
  txt11: Platform.OS == "ios" ?
    {
      color: '#3DA954', marginTop: hp('-1%'),
      fontSize: 14,
    } :
    {
      fontFamily: 'ExpoArabicSemiBold',
      color: '#3DA954', marginTop: hp('-1%'),
      fontSize: 14,
    },

  btnFooter1:
  {
    backgroundColor: '#EDF8EF',
    borderRadius: 10,
    height: 50,
    width: 196,
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    shadowColor: '#DEE5E1',
    marginTop: hp('1%'),
    marginLeft: hp('2%'),

  },
  cyrcle: {
    width: 40,
    height: 40,
    backgroundColor: '#3DA954',
    borderWidth: 2,
    borderColor: '#DBE2DD',
    borderRadius: 25,

  },
  titleRow3:  Platform.OS == "ios" ?
  {
    flexDirection: 'row-reverse',
    marginTop: hp('1%'),
    marginLeft: wp('3%'),
  }:
  {
    flexDirection: 'row-reverse',
    marginTop: hp('0%'),
    marginLeft: wp('3%'),
  },
  goIconView: {
    marginRight: 15,
  }
  , lineGreen: {
    height: 4,
    backgroundColor: '#9AC1A1',
    width: wp('50'),
    marginTop: -4,
    right: 0,
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  view9 : Platform.OS == "ios" ?
  {
      marginRight : wp('5%')
  }:
  {

  },

  view10 : Platform.OS == "ios" ?
  {
      marginTop : hp('1%')
  }:
  {

  } 
};