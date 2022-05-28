import { StyleSheet, Text, View  , FlatList , Dimensions} from 'react-native'
import React, { useState ,useEffect } from 'react'

import { getMovies } from '../../../api'
import ViewCard from '../../../Components/ViewCard'
import Loading from '../../../Components/Loading'

const { width, height } = Dimensions.get('window');

const ListMovies = ({navigation}) => {
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getMovies();
            setMovies(movies);
            console.log(...Movies)
        };
        if (Movies.length === 0) {
            fetchData(Movies);
        }
    }, [Movies]);

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
        <View style={{flex:1}}>
            <View style={{borderBottomColor:"white" , borderBottomWidth:1 , margin:10}}></View>
            {Movies.length === 0 ? (
                <Loading />
            ) : (
                <FlatList
                    data={Movies}
                    // numColumns={2}
                    keyExtractor={(item, index) => item.Key}
                    renderItem={renderRow}
                />
            )}

        </View>
    )
}

export default ListMovies

const styles = StyleSheet.create({})