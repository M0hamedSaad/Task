import styles from './style';
import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import { withNavigation } from "react-navigation";
import Image from 'react-native-remote-svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Star from '../../../Images/star.svg';
import Arrow from '../../../Images/arrow.svg';
import Back from '../../../Images/back.svg';
import Charge from '../../../Images/charge.svg';
import Coffe from '../../../Images/coffe.svg';
import Down from '../../../Images/down.svg';
import Filter from '../../../Images/filter.svg';
import Gift from '../../../Images/gift.svg';
import Go from '../../../Images/go.svg';
import Help from '../../../Images/help.svg';
import Info from '../../../Images/info.svg';
import Nosmoke from '../../../Images/nosmoke.svg';
import UpDown from '../../../Images/upDown.svg';
import Video from '../../../Images/video.svg';
import Wifi from '../../../Images/wifi.svg';
import Man from '../../../Images/man.svg';
import Bag from '../../../Images/bag.svg';





const Data = [{ Key: '1' }, { Key: '2' }, { Key: '3' }]

class Home extends Component {

  componentDidMount() {
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
    console.disableYellowBox = true;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView >

          
          <View>
            <View style={styles.row}>
              <View style={styles.viewIconBack}>
                <Back style={styles.back}  />
              </View>

              <View style={styles.header}>
                <View>
                  <View style={styles.titleRow}>
                    <Text style={styles.txt}>الرياض</Text>
                    <View style={styles.viewIconArrow}>
                      <Arrow style={styles.arrow}  />
                    </View>
                    <Text style={styles.txt}>جدة</Text>
                  </View>
                  <Text style={styles.txt1}>الإثنين 15 أكتوبر 2019</Text>
                </View>

                <View style={styles.titleRow1}>
                  <Help style={styles.details}/>
                  <Text style={styles.txt}>تفاصيل الطلب</Text>

                </View>
              </View>
            </View>

            <View style={styles.titleRow2}>
              <Text style={styles.txt2}>في انتظار العروض (13) : 04:23</Text>
              <View style={styles.cancelRequestView}>
                <Text style={styles.txt}>إلغاء الطلب</Text>
              </View>
            </View>

            <View style={styles.Table}>
              <View style={styles.txtViewTable}>
                <Text style={styles.txt3}>فئة السيارة</Text>
              </View>
              <View style={styles.viewIconDown}>
                <Down style={styles.icontable}  />
              </View>
              <View style={styles.line} />

              <View style={styles.txtViewTable}>
                <Text style={styles.txt3}>الأقل سعر</Text>
              </View>
              <View style={styles.viewIconDown}>
                <UpDown style={styles.icontable} />
              </View>
              <View style={styles.line} />

              <View style={styles.txtViewTable}>
                <Text style={styles.txt3}>التصفية(30)</Text>
              </View>
              <View style={styles.viewIconDown}>
                <Filter style={styles.icontable}  />
              </View>

            </View>
<View style={styles.lineGreen}/>
            <View style={{ backgroundColor: '#F1F4F2' }}>

              <FlatList
                data={Data}
                numColumns={1}
                style={{ paddingHorizontal: 5, }}
                contentContainerStyle={styles.listContainer}
                keyExtractor={item => item.Key}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.menuBox}>
                      <View style={styles.ViewImageIssue}>

                        <View style={styles.view1}>
                          <Text style={styles.txt4}>ريال</Text>
                          <View style={styles.col}>
                            <Text style={styles.num} >260</Text>
                            <Text style={styles.num1} >500 ريال </Text>
                          </View>

                          <View style={styles.view2}>

                            <View style={styles.view3}>
                              <Text style={styles.txt5} >عبدالوهاب احمد</Text>
                              <View style={styles.view4}>
                                <Text style={styles.txt6}>4.7</Text>
                                <Star style={styles.star}  />
                              </View>
                            </View>

                            <View style={styles.view5}>
                              <Help style={styles.user}  />
                            </View>
                          </View>

                        </View>
                        <View style={styles.view6}>
                          <View style={styles.view7}>
                            <Info style={styles.icon} />
                            <Text style={styles.txt7}>6 شنط</Text>
                            <Bag style={styles.icon1}  />
                            <Text style={styles.txt7} >7 مقاعد</Text>
                            <Man style={styles.icon2}  />
                            <Text style={styles.txt8}>فورد إكسبلوورر</Text>
                          </View>

                        </View>
                        <View style={styles.view8}>
                          <Video style={styles.icon} />
                          <Text>  </Text>
                          <Wifi style={styles.icon} />
                          <Nosmoke style={styles.icon}  />
                          <Charge style={styles.icon}  />
                          <Coffe style={styles.icon}  />
                          <Text style={styles.txt9}>سيارة كاملة</Text>

                        </View>
                      </View>

                    </View>
                  )
                }} />
              <View style={styles.height} />

            </View>


          </View>
        </ScrollView>
        <View style={styles.footer}  >
          <View style={styles.btnFooter}>
            <Gift style={styles.giftIcon}  />

            <Text style={styles.txt10}>كود خصم !</Text>
          </View>

          <View style={styles.btnFooter1}>
            <View style={styles.cyrcle} />
            <View>
              <Text style={styles.txt10}>رحلات مجدولة</Text>
              <View style={styles.titleRow3}>
                <Text style={styles.txt11}>الرياض</Text>
                <View style={styles.viewIconArrow2}>
                  <Arrow style={styles.arrow} />
                </View>
                <Text style={styles.txt11}>جدة</Text>
              </View>
            </View>
<View style={styles.goIconView}>
            <Go style={styles.giftIcon}  />
            </View>
          </View>

        </View>
      </View>

    );
  }
}
export default withNavigation(Home);






