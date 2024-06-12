import MatrialIcon from '@expo/vector-icons/MaterialIcons'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
const HeaderSura = ({ title }) => {

    const navigation = useNavigation()
    const handleNav = () => {
        return navigation.goBack()
    }
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerContainerView}>
                <TouchableOpacity style={{padding:1, justifyContent:"center"}} onPress={handleNav}>
                    <MatrialIcon name='arrow-forward' size={18} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{title}</Text>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        padding: 20,
        flex: 1,
        alignItems:'center'
    },
    headerContainerView: {
        flex: 1,
        flexDirection: "row-reverse",
        alignItems: 'baseline'
    },
    headerText: {
        fontFamily: 'AmiriQuran-Regular',
        fontSize: 18,
    }
})

export default HeaderSura