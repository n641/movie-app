import { StyleSheet, Text, View, FlatList, Dimensions, Platform, Animated, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

import { getMovies } from '../../../api'
import MainCard from '../../../Components/MainCard'
import Loading from '../../../Components/Loading'


const { width, height } = Dimensions.get('window');
const SPACING = 10;
const SizeOfItem = Platform.OS === 'ios' ? width / 1.3 : width / 1.2;
const EMPTY_ITEM_SIZE = (width - SizeOfItem) / 2;


const BestRating = ({navigation}) => {

    const [Movies, setMovies] = useState([]);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getMovies();
            let temp = [];
            movies.map((movie) => {
                if (movie.rating > 7) {
                    temp.push(movie);
                }
            })
            setMovies([{ key: 'L' }, ...temp, { key: 'R' }]);
        };
        if (Movies.length === 0) {
            fetchData(Movies);
        }
    }, [Movies]);

    const renderRow = ({ item, index }) => {

        if (!item.poster) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
        }

        return (
            <Animated.View style={styles.screen}>
                <MainCard title={item.title} poster={item.poster}
                    overview={item.description} release_date={item.releaseDate}
                    SizeOfItem={SizeOfItem} rating={item.rating} genres={item.genres}
                    index={index} scrollX={scrollX} navigation={navigation}
                />
            </Animated.View>
        )
    }



    if (Movies.length === 0) {
        return <Loading />;
    }

    return (
        <View style={{}}>
            {/* <Backdrop movies={Movies} scrollX={scrollX} /> */}
            <Text style={{ color: "white", textAlign: 'justify', marginLeft:20, marginTop:20, fontSize: 20, fontWeight: 'bold' }}>Best rated </Text>
            <Animated.FlatList
                data={Movies}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                snapToInterval={SizeOfItem}
                decelerationRate={0}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            />
        </View>
    )
}

export default BestRating

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        marginVertical: 30,
        //   justifyContent: 'center'
    }
})