import { StyleSheet, Text, View, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { API_KEY } from '../config';

// import { getMovies } from '../api';
import MainCard from '../Components/MainCard';

const { width, height } = Dimensions.get('window');
const SPACING = 10;
const SizeOfItem = Platform.OS === 'ios' ? width / 1.3 : width / 1.2;
const EMPTY_ITEM_SIZE = (width - SizeOfItem) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const HomeScreen = () => {
    const [Movies, setMovies] = useState([]);
    const [page, setpage] = useState(1)

    // ///////////////////////////get api ///////////////////////////////////////////////////////
const genres = {
    12: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
    18: 'Drama',
    27: 'Horror',
    28: 'Action',
    35: 'Comedy',
    36: 'History',
    37: 'Western',
    53: 'Thriller',
    80: 'Crime',
    99: 'Documentary',
    878: 'Science Fiction',
    9648: 'Mystery',
    10402: 'Music',
    10749: 'Romance',
    10751: 'Family',
    10752: 'War',
    10770: 'TV Movie',
  };
const API_URL = `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`;

const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

   const getMovies = async () => {
    const { results } = await fetch(API_URL).then((x) => x.json());
    const movies = results.map(
      ({
        id,
        original_title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        release_date,
        genre_ids,
      }) => ({
        key: String(id),
        title: original_title,
        poster: getImagePath(poster_path),
        backdrop: getBackdropPath(backdrop_path),
        rating: vote_average,
        description: overview,
        releaseDate: release_date,
        genres: genre_ids.map((genre) => genres[genre]),
      })
    );
  
    return movies;
  };
    // //////////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
        const fetchData = async () => {
          const movies = await getMovies();
          setMovies([{ key: ' ' }, ...movies, { key: ' ' }]);
        };
        if (Movies.length === 0) {
          fetchData(Movies);
        }
      }, [Movies]);


    const renderRow = ({ item }) => {
        if (!item.poster) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }
        return (
            <View style={styles.screen}>
                <MainCard title={item.title} poster={item.poster}
                    overview={item.description} release_date={item.releaseDate}
                    SizeOfItem={SizeOfItem} rating={item.rating} genres={item.genres} />
            
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={Movies}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})