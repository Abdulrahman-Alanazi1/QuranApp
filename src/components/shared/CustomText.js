import { Text, View } from "react-native";

const CustomText = ({styles, title}) => {
    return(
        <View style={{}}>
            <Text style={styles}>{title}</Text>
        </View>
    )
}
export default CustomText