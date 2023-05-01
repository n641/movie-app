import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
const genres = [
    'Adventure',
    'Fantasy',
    'Animation',
    'Drama',
    'Horror',
    'Action',
    'Comedy',
    'History',
    'Western',
    'Thriller',
    'Crime',
    'Documentary',
    'Science Fiction',
    'Mystery',
    'Music',
    'Romance',
    'Family',
    'War',
    'TV Movie',
];


const Categories = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.containertest}>
                    {genres.map((name, i) => (
                        <TouchableOpacity key={i} onPress={() => {
                            navigation.navigate("Results", { type: name })
                        }}>
                            <Text style={styles.TextStyle}>{name}</Text>
                        </TouchableOpacity>
                    ))}

                </View>
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: "black",

    },
    containertest: {
        margin: 10
    },
    TextStyle: {
        color: "gray",
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})