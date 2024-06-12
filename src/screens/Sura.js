import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView, StatusBar } from "react-native";
import Swiper from 'react-native-swiper';
import quranData from '../data/hafsData.json'

export default function Sura({ route }) {
    const { suraName, suraNum, ayaText } = route.params
    const [currentPage, setCurrentPage] = useState(1);

    const data = [
        { id: 1, title: 'ss', name: 'Ahmed', page: 1 },
        { id: 2, title: 'dd', name: 'khalid', page: 2 },
        { id: 3, title: 'ss', name: 'nasser', page: 1 },
    ];
    const handleSwipe = (index) => {

        setCurrentPage(quranData[index].page)
    }
    const groupedData = quranData.reduce((acc, item) => {
        const page = item.page
        acc[page] = acc[page] || [];
        acc[page].push(item);
        return acc
    }, {})

    // const data1 = data.reduce((acc, item) => {
    //     acc[item.page] = acc[item.page] || [];
    //     acc[item.page].push(item);
    //     return acc;
    // }, {});

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>

                <Swiper
                    loop={false}
                    loadMinimal
                    showsPagination={false}
                    onIndexChanged={handleSwipe}>

                    {Object.keys(groupedData).map((page) => (
                        <View key={page} style={styles.slide}>
                            {groupedData[page].map((item) => (
                                <View key={item.id}>
                                    <Text style={styles.suraText}>{item.aya_text}</Text>
                                </View>
                            ))}
                        </View>
                    ))}

                </Swiper>
            </ScrollView>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: StatusBar.currentHeight,
        justifyContent:"center"
    },
    scroll:{
        paddingHorizontal: 5,
    },
   
    suraText: {
        fontFamily: 'uthmanic_hafs',
        fontSize: 20,
        textAlign:'center',
    },

    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})