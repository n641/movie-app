import { StyleSheet, Text, View, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import BestRating from './componentsOfHome/BestRating'
const HomeScreen = () => {
  
  return (
    <View style={styles.screen}>
     <BestRating/>
    </View>
  )
}

export default HomeScreen

const styles= StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center'
  }
})
