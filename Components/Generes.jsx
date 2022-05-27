import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'

const Generes = ({ genres }) => {
  // const renderItem = ({ item }) => (
  //   <View style={styles.container}>
   
  //   <View  style={styles.textcontainer}>
  //   <Text style={{fontSize:12}} >{item}</Text>
  // </View>
  // </View>

  // );

  return (
    <View style={styles.container}>
     {genres.map((genre, i) => (
      
          <View key={genre} style={styles.textcontainer}>
            <Text style={{fontSize:12}}>{genre}</Text>
          </View>
        
      ))}
      {/* <FlatList
        data={genres}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      /> */}
    </View>
  )
}

export default Generes

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'center'
  },
  textcontainer: {
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#bcbcbc",
    borderRadius: 20,
    padding: 2,
    margin: 2,
    alignItems:'center',
    textAlign:'center',
  }

})