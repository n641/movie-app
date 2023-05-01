import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

import ViewCard from '../../../Components/ViewCard'
import Loading from '../../../Components/Loading'
import axios from "axios";
import BestRating from './BestRating';
import Header from './Header';

const { width, height } = Dimensions.get('window');

const ListMovies = ({ navigation }) => {
    const [Movies, setMovies] = useState([]);
    const [page, setpage] = useState(1)
    const [isLoading, setIsLoading] = useState(false);

    const getMovies = () => {
        setIsLoading(true)
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=${page}`)
            .then(res => {
                setMovies([...Movies, ...res.data.results])
                setIsLoading(false)
            })
            .catch(err => console.error(err));
    }

    const getImagePath = (path) =>
        `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

    const loadMoreIteam = () => {
        setpage(page + 1)
    }

    useEffect(() => {
        getMovies();
    }, [page]);

    const renderLoader = () => {
        return (
            isLoading ?
                <Loading />
                : null
        )
    }

    const renderRow = (({ item }) => {
        return (
            <View>
                <ViewCard title={item.title} poster={getImagePath(item.poster_path)}
                    overview={item.overview} release_date={item.release_date}
                    rating={item.vote_average} navigation={navigation} />
            </View>
        )
    })

    const listheadercom = () => {
        return (
            <View>
                <Header navigation={navigation} />
                <BestRating navigation={navigation} />
                <Text style={styles.StyleText}>Movies</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            {/* <Text style={styles.StyleText}>Movies</Text> */}
            {Movies.length === 0 ? (
                <Loading />
            ) : (
                <FlatList
                    data={Movies}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderRow}
                    ListFooterComponent={() => renderLoader()}
                    onEndReached={() => loadMoreIteam()}
                    onEndReachedThreshold={0}
                    ListHeaderComponent={listheadercom}
                />
            )}

        </View>
    )
}

export default ListMovies

const styles = StyleSheet.create({
    StyleText: {
        color: "white",
        margin: 10,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})