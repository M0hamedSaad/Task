import styles from './style';
import React, { Component } from 'react'
import {
  StyleSheet, TouchableOpacity,
  Text, View, TextInput,
  ImageBackground, Button, ScrollView,
  Alert, TouchableHighlight, KeyboardAvoidingView
} from 'react-native'
import { Icon, Toast } from 'native-base'

import { withNavigation } from "react-navigation";

import Image from 'react-native-remote-svg'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
          <View>
            <View style={styles.row}>
              <View style={styles.viewIconBack}>
                <Image style={styles.back} source={require('../../../Images/back.svg')} />
              </View>

              <View style={styles.header}>
                <View>
                <View style={styles.titleRow}>
                  <Text style={styles.txt}>الرياض</Text>
                  <View style={styles.viewIconArrow}>
                    <Image style={styles.arrow} source={require('../../../Images/arrow.svg')} />
                  </View>
                  <Text style={styles.txt}>جدة</Text>
                </View>
                <Text style={styles.txt1}>الإثنين 15 أكتوبر 2019</Text>
                </View>

                <View style={styles.titleRow1}>
                  <Text style={styles.txt}>تفاصيل الطلب</Text>
                  <View style={styles.viewIconHelp}>
                    <Image style={styles.back} source={require('../../../Images/help.svg')} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    );
  }
}
export default withNavigation(Home);






