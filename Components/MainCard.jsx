import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native'
import React from 'react'

import Rate from './Rate';
import Generes from './Generes';
const { width, height } = Dimensions.get('window');

const SPACING = 10;
const SizeOfItem = Platform.OS === 'ios' ? width / 1.3 : width / 1.2;
const EMPTY_ITEM_SIZE = (width - SizeOfItem) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const MainCard = ({ title, poster, overview, rating, genres }) => {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: poster }}
        style={styles.posterImage}
      />
      <Text style={[styles.textOfPoster, {fontSize: title.length>20?width/29:width/20,}]}>{title}</Text>
      <View style={{alignItems:'center' ,justifyContent:'center' }}>
      <Rate rating={rating} />
      <Generes genres={genres}/>
      <Text numberOfLines={3} style={{ fontSize: 12 , width:SizeOfItem-100 , textAlign:'center' }}>{overview}</Text>
      </View>
    </View>
  )
}

export default MainCard

const styles = StyleSheet.create({
  container: {
    borderRadius: 34,
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    alignItems: 'center',
    // transform: [{ translateY }],
    backgroundColor: 'white',
  },
  posterImage: {
    width: width / 2,
    height: width - 50,
    borderRadius: 25,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textOfPoster: {
    fontWeight: 'bold',
    // fontSize: title.length>20?width/29:width/20,
    textAlign: 'center',
  }
})