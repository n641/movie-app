import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from "@expo/vector-icons";


import { getMovies } from '../../../api';
import ViewCard from '../../../Components/ViewCard';
import Loading from '../../../Components/Loading';

const Results = ({ navigation, route }) => {
    const { type } = route.params;
    const [Movies, setMovies] = useState([])
    const [results, setresults] = useState([])
    const [isLoadding, setIsLoadding] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getMovies();
            setMovies(movies);
        };
        if (Movies.length === 0) {
            fetchData(Movies);
        }
    }, [Movies]);

    useEffect(() => {
        setIsLoadding(true)
        let temp = [];
        Movies.map((movie) =>
            movie.genres.map((name) => {
                name == type ?
                    temp.push(movie) : null
            }))
        setresults(temp);
        setIsLoadding(false)

    }, [Movies])

    const renderRow = (({ item }) => {
        return (
            <View>
                <ViewCard title={item.title} poster={item.poster}
                    overview={item.description} release_date={item.releaseDate}
                    rating={item.rating} navigation={navigation} />
            </View>
        )
    })


    return (
        <View style={{ backgroundColor: "black", flex: 1, justifyContent: 'center' }}>

            {
                results.length == 0 ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="alert-circle-outline" size={60} color={'white'} />
                        <Text style={styles.TextStyle}>Not Found</Text>
                    </View>

                ) : (
                    <FlatList
                        data={results}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderRow}
                    />
                )
            }
        </View>
    )
}

export default Results

const styles = StyleSheet.create({
    TextStyle: {
        color: "gray",
        margin: 10,
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold'
    }
})