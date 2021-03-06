import { StyleSheet, Text, View, Image, Dimensions, Platform, Animated , TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import Rate from './Rate';
import Generes from './Generes';
const { width, height } = Dimensions.get('window');

const SPACING = 15;
const SizeOfItem = Platform.OS === 'ios' ? width / 1.3 : width / 1.2;

const MainCard = ({ title, poster, overview, rating, genres,release_date, index, scrollX , navigation }) => {

  const translateY = scrollX.interpolate({
    inputRange: [
      (index - 2) * SizeOfItem,
      (index - 1) * SizeOfItem,
      index * SizeOfItem,
    ],
    outputRange: [50, -10, 50],
    extrapolate: "clamp"
  });

  return (
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate("DetailsScreen" , {title:title ,poster:poster , overview:overview , rating:rating , release_date:release_date })
    }}>
    <Animated.View style={{ width: SizeOfItem , marginBottom:20 }}>
      <Animated.View style={[styles.container,
      { transform: [{ translateY }] }
      ]}
      >
        <Image
          source={{ uri: poster }}
          style={styles.posterImage}
        />
        <Text style={[styles.textOfPoster, { fontSize: title.length > 20 ? width / 29 : width / 20, }]}>{title}</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Rate rating={rating} />
          <Generes genres={genres} />
          <Text numberOfLines={3} style={{ fontSize: 12, width: SizeOfItem - 100, textAlign: 'center', color: "white" }}>{overview}</Text>
        </View>
      </Animated.View>
    </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default MainCard

const styles = StyleSheet.create({
  container: {
    borderRadius: 34,
    marginHorizontal: SPACING,
    padding: SPACING,
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: "white", borderWidth: 1
  },
  posterImage: {
    width: SizeOfItem - 50,
    height: width - 90,
    borderRadius: 25,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textOfPoster: {
    fontWeight: 'bold',
    // fontSize: title.length>20?width/29:width/20,
    textAlign: 'center',
    color: "white"
  }
})