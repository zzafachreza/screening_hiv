import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import { colors, fonts } from '../../utils';
import { MyHeader } from '../../components';

export default function Informasi({ navigation, route }) {

    const [data, setData] = useState([]);

    const isFocused = useIsFocused();

    const __getTransaction = () => {
        axios.post(apiURL + 'informasi').then(res => {
            console.log(res.data);
            setData(res.data)
        })
    }

    useEffect(() => {
        if (isFocused) {
            __getTransaction();
        }
    }, [isFocused])

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader title="Informasi terkait HIV" />
            <View style={{
                flex: 1,
                padding: 12
            }}>
                <FlatList data={data} renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('InformasiDetail', item)} style={{
                            marginVertical: 10,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <Image source={{
                                uri: item.image
                            }} style={{
                                borderRadius: 10,
                                width: '100%',
                                height: 250,
                            }} />
                            <View style={{
                                bottom: 0,
                                padding: 10,
                                width: '100%',
                                position: 'absolute',
                                backgroundColor: '#00000087',
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                            }}>
                                <Text style={{

                                    ...fonts.headline4,
                                    color: colors.white,
                                }}>{item.judul}</Text>
                            </View>

                        </TouchableOpacity>
                    )
                }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})