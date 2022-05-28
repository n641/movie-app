import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Categories");
            }}>
                <Ionicons name="list-outline" size={30} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Seacrh")
            }}>
                <Ionicons name="search-outline" size={30} color={'white'} />
            </TouchableOpacity>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width-40 ,
        marginHorizontal:20
    }
})