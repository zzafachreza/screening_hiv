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
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyInputLogin, MyPicker, MyRadio } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth, Color } from '../../utils';

export default function TentangKami() {

    const MyList = ({ label, value }) => {
        return (
            <View style={{
                marginTop: 4,
                marginHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'flex-start'
            }}>
                <Text style={{
                    flex: 0.5,
                    ...fonts.body3,
                    color: colors.primary
                }}>{label}</Text>
                <Text style={{
                    flex: 0.1,
                    ...fonts.body3,
                    color: colors.primary
                }}>:</Text>
                <Text style={{
                    flex: 1,
                    ...fonts.body3,
                    color: colors.primary
                }}>{value}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader title="Tentang Kami" />
            <ScrollView>
                <Image source={require('../../assets/person.png')} style={{
                    width: '100%',
                    height: 240,
                    resizeMode: 'contain',
                    marginTop: 10,
                    marginBottom: 20,
                }} />

                <MyList label="Nama" value="Dr. Ishak Kenre, SKM., M.Kes" />
                <MyList label="Email" value="ishakkenre2020@gmail.com" />
                <MyList label="Alamat Rumah" value="Jl. Unta No. 21 Kel. Lautang Benteng, Kec. Maritengngae Kab Sidrap Prov. Sulsel" />
                <MyList label="Nomor Telepon" value="0823-866-866-75" />
                <MyList label="Alamat Kampus" value="Institut Teknologi Kesehatan dan Sains Muhammadiyah Sidrap, Jl. Syarif Al-Qadri No. 11 Pangkajene Sidrap" />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})