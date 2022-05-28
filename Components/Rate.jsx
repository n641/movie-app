import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";


const { width, height } = Dimensions.get('window');

const Rate = ({rating}) => {
    const filledStars = Math.floor(rating / 2);
    const maxStars = Array(5 - filledStars).fill('star-outline');
    const rate = [...Array(filledStars).fill('star'), ...maxStars];
    return (
        <View style={styles.container}>
            <Text style={styles.RateText}>{rating}</Text>
            <View style={styles.rateContainer}>
            {rate.map((name, index) => (
                 <Ionicons key={index} name={name} size={15} color={'tomato'} /> 
            ))}
            </View>
        </View>
    )
}

export default Rate

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:'center',
    },
    rateContainer:{
        flexDirection:'row',
        marginHorizontal:10
    },
    RateText:{
        fontWeight:'500'
    }

})