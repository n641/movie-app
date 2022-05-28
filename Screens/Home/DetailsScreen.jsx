import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";


import Rate from '../../Components/Rate';

const { width, height } = Dimensions.get('window');

const DetailsScreen = ({ navigation, route }) => {
    const { title, poster, overview, rating, release_date } = route.params;
    console.log(title);
    return (
        <View style={styles.screen}>
            <Image
                source={{ uri: poster }}
                style={styles.posterImage}
            />
            <View style={{ marginTop: 50 }}>
                <View style={styles.container}>
                    <View>
                        <Text style={[styles.textTitle , {fontSize:title.length>10?20:30}]}>{title}</Text>
                        <View style={styles.containerTme}>
                            <Ionicons name="time-outline" size={25} color={'white'} />
                            <Text style={styles.TextTime}>{release_date}</Text>
                        </View>
                    </View>
                    <View style={styles.Ratecontainer}>
                        <Text style={styles.textTitle}>{rating}</Text>
                        <Rate rating={rating} />
                    </View>
                </View>
                <View>
                    <Text numberOfLines={4} style={styles.textoverView}>{overview}</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "black",
    },
    posterImage: {
        borderRadius: 30,
        width: width,
        height: width,
        resizeMode: 'contain'

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textTitle: {
        color: "white",
        marginTop: 5,
        fontSize: 30,
        marginLeft: 10
    },
    TextTime: {
        color: "gold",
        width: 200,
        fontSize: 25,

    },
    Ratecontainer: {
        alignItems: 'center',
    },
    containerTme: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    }
    , textoverView: {
        color: "white",
        marginTop: 10,
        fontSize: 18,
        marginLeft: 10
    }
})