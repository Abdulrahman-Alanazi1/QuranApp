import { View, Text, StyleSheet} from "react-native";

const HeaderList = ({ title }) => {
    return (
        <View style={{flexDirection:'row', margin:20, flex:1}}>
            <View style={{flexDirection:'row-reverse', width:"100%", paddingRight:20}}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    headerText:{
        fontFamily: 'AmiriQuran-Regular',
        fontSize:18,
    }
})

export default HeaderList