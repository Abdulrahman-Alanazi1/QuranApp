import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,

} from "react-native";
import hafsData from '../data/hafsData.json'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


SplashScreen.preventAutoHideAsync()

export default function SuraList({ navigation }) {
    
    /* this is a function i created to filter out
      a locale json file that has duplicated objects and u just need the title 
    */
    const uniqueIdentifiers = new Set();
    const filteredData = hafsData.filter(item => {
        const identifier = item.sura_name_en
        if (!uniqueIdentifiers.has(identifier)) {
            uniqueIdentifiers.add(identifier)
            return true
        }
        return false
    })

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredData}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Sura",{
                                    suraName: item.sura_name_ar,
                                    suraNum : item.sura_no,
                                    ayaText: item.aya_text
                                })
                            }}
                            >
                            <View style={styles.quranList}>
                                <Text style={styles.suraName}>
                                    {
                                        item.sura_name_ar
                                    }
                                </Text>
                                <Text style={styles.suraName}>
                                    {
                                        item.sura_no
                                    }
                                </Text>

                            </View>
                        </TouchableOpacity>
                    )
                }} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    quranList: {
        flexDirection: 'row-reverse',
        backgroundColor: "white",
        elevation: 3.5,
        borderRadius: 5,
        margin: 4,
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    suraName: {
        fontFamily: 'AmiriQuran-Regular',
        fontSize: 20,
    }
})