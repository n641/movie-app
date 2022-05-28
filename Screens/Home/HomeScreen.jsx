import { StyleSheet, Text, View, FlatList, Dimensions, Platform , ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import BestRating from './componentsOfHome/BestRating'
import Header from './componentsOfHome/Header'
import ListMovies from './componentsOfHome/ListMovies'

const HomeScreen = ({navigation}) => {
  
  return (
    <ScrollView style={{backgroundColor:"black"}}>
    <View style={styles.screen}>
      <Header navigation={navigation} />
     <BestRating navigation={navigation}/>
    </View>
    <ListMovies navigation={navigation}/>
     </ScrollView> 
  )
}

export default HomeScreen

const styles= StyleSheet.create({
  screen:{
    flexGrow:1,
    justifyContent:'center'
  }
})
