import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";

import { getMovies } from '../../api';
import Loading from '../../Components/Loading';
import ViewCard from '../../Components/ViewCard';


const { width, height } = Dimensions.get('window');

const Seacrh = ({ navigation }) => {
    const [Movies, setMovies] = useState([]);
    const [search, setsearch] = useState('');

    const HandleSearch = (name)=>{
        setsearch(name)
        filteredMovies(search)
    }

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getMovies();
            setMovies(movies);
        };
        if (Movies.length === 0 ) {
            fetchData(Movies);
        }
    }, [Movies , search]);

    const renderRow = (({ item  }) => {
        return (
            <View>
                <ViewCard title={item.title} poster={item.poster}
                    overview={item.description} release_date={item.releaseDate}
                    rating={item.rating} navigation={navigation} />
            </View>
        )
    })

      const filteredMovies =(text)=>{
          if(text){
              if(!Movies?.length)return;
              let temp=[];
              Movies.map((m)=>{
                  m.title.toUpperCase()
                  .includes(text.toUpperCase()) ?temp.push(m) : null
              })
              setMovies(temp);
          }
      }

    return (
        <View style={styles.screen}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.InputContaner}>
                    <TextInput
                        placeholder='Enter name of the movie'
                        placeholderTextColor={"gray"}
                        onChangeText={HandleSearch}
                        value={search}
                        style={{width:width - 50 , color:"white"}}
                        onChange={()=>{
                            filteredMovies(search)
                        }}
                    />
                </View>
                <TouchableOpacity onPress={() => {
                    filteredMovies(search)
                 }}>
                    <Ionicons name="search-outline" size={25} color={'white'} />
                </TouchableOpacity>
            </View>
            {Movies.length === 0 ? (
                <Loading />
            ) : (
                <FlatList
                    data={Movies}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderRow}
                />
            )}

        </View>
    )
}

export default Seacrh

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "black"
    },
    InputContaner: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 25,
        width: width - 50,
        margin: 10,
        height: width / 12,
        padding: 5
    }
})