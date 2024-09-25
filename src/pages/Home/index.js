import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth, Color } from '../../utils';
import { MYAPP, apiURL, api_token, getData, storeData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import moment from 'moment';
import { useToast } from 'react-native-toast-notifications';
import MyLoading from '../../components/MyLoading';
import MyCarouser from '../../components/MyCarouser';
import { Icon } from 'react-native-elements';


const MyMenu = ({ onPress, img, label, backgroundColor, desc }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth / 4,
        height: windowWidth / 4,
      }}>
        <View style={{
          backgroundColor: backgroundColor,
          borderRadius: 12,
          width: windowWidth / 4,
          height: windowWidth / 4,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center'

        }}>
          <Image source={img} style={{
            width: windowWidth / 5, height: windowWidth / 5,
          }} />
        </View>
        <Text style={{
          marginTop: 10,
          color: colors.black,
          ...fonts.caption,
          textAlign: 'center',
          maxWidth: '85%'
        }}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});

  const __getUser = () => {
    getData('user').then(u => {
      setUser(u)
    })
  }

  useEffect(() => {
    __getUser();
  }, [])
  return (
    <ImageBackground style={{
      flex: 1,
      backgroundColor: colors.white,
      width: "100%",
      height: "100%"
    }}>




      {/* HEADER */}
      <View style={{
        padding: 20, backgroundColor: colors.primary,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        height: windowHeight / 3,

      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.secondary[800],
              fontSize: 20,
              color: colors.white
            }}>Selamat Datang, </Text>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: 14,
              color: colors.white
            }}>{user.nama_lengkap}</Text>
          </View>

          <Image style={{
            marginTop: 10,
            width: 150,
            height: 70,
            // resizeMode: 'contain'
          }} source={require('../../assets/logo2.png')} />
        </View>



      </View>
      {/* END HEADERS */}

      <View style={{ padding: 10, flex: 1 }}>
        {/* Sldier */}

        <View style={{ alignItems: "center", marginTop: -120 }}>
          <MyCarouser />
        </View>


        <View style={{
          padding: 10
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Informasi')} style={{
            backgroundColor: colors.primary,
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Image source={require('../../assets/a1.png')} style={{
              left: 10,
              width: 60,
              height: 60,

            }} />
            <Text style={{
              left: 20,
              flex: 1,
              ...fonts.headline3,
              color: colors.white,
            }}>Informasi terkait HIV</Text>
          </TouchableOpacity>
          <MyGap jarak={20} />
          <TouchableOpacity onPress={() => navigation.navigate('Screening', user)} style={{
            backgroundColor: colors.primary,
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Image source={require('../../assets/a2.png')} style={{
              left: 10,
              width: 60,
              height: 60,

            }} />
            <Text style={{
              left: 20,
              flex: 1,
              ...fonts.headline3,
              color: colors.white,
            }}>Pengisian Screening HIV</Text>
          </TouchableOpacity>
        </View>



      </View>


    </ImageBackground>
  )
}

const styles = StyleSheet.create({})