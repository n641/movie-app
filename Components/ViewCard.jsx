import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";


const { width, height } = Dimensions.get('window');


const ViewCard = ({ title, poster, overview, rating, release_date, navigation  }) => {
    return (
        <View style={styles.container}>
            <View style={styles.outerContainer}>
                <Image
                    source={{ uri: poster }}
                    style={styles.posterImage}
                />
                <View>
                    <Text style={styles.textTitle}>
                        {title}
                    </Text>
                    <Text style={styles.textTitle} numberOfLines={2}>
                        {overview}
                    </Text>
                    <View style={styles.outerContainer}>
                        <Ionicons name="time-outline" size={25} color={'white'} />
                        <Text style={styles.textTitle}>{release_date}</Text>
                    </View>
                </View>
                <View >
                    <Ionicons name="star" size={25} color={'yellow'} />
                    <Text style={styles.textTitle}>{rating}</Text>
                </View>

            </View>

        </View>
    )
}

export default ViewCard

const styles = StyleSheet.create({
    container: {
        borderColor: "white",
        borderRadius: 25,
        backgroundColor: "black",
        padding: 5,
        margin: 10,
        width: width - 20
    },
    outerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    posterImage: {
        borderRadius: 20,
        width: width / 4,
        height: width / 4 +30,
        elevation:2,
        
    },
    textTitle: {
        color: "white",
        width: 200,
        margin: 5
    }
})