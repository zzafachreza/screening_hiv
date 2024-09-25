import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import { colors, fonts, windowWidth } from '../../utils';
import { MyHeader } from '../../components';
import RenderHtml from 'react-native-render-html';


export default function InformasiDetail({ navigation, route }) {

    const item = route.params;
    const systemFonts = [fonts.body3.fontFamily, fonts.headline4.fontFamily];
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader title={item.judul} />
            <ScrollView style={{
                padding: 16
            }}>
                <Image source={{
                    uri: item.image
                }} style={{
                    borderRadius: 10,
                    width: '100%',
                    height: 250,
                }} />

                <RenderHtml
                    tagsStyles={{
                        p: {
                            fontFamily: fonts.body3.fontFamily,
                            textAlign: 'justify',
                            lineHeight: 26,
                        },
                    }}
                    systemFonts={systemFonts}
                    contentWidth={windowWidth}
                    source={{
                        html: item.keterangan
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})