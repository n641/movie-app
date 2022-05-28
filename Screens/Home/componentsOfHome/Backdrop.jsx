import { StyleSheet, Text, View, Animated, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'

import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Circle, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const BACKDROP_HEIGHT = height * 0.65;
const SizeOfItem = Platform.OS === 'ios' ? width / 1.3 : width / 1.2;





const BackDrop = ({ movies, scrollX }) => {

    return (
        <Animated.View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' ,top:0 , left:0 }}>

            <FlatList
                data={movies}
                keyExtractor={(item) => item.key + '-backdrop'}
                removeClippedSubviews={false}
                contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
                renderItem={({ item, index }) => {
                    if (!item.backdrop) {
                        return null;
                    }
                    const translateX = scrollX.interpolate({
                        inputRange: [(index - 2) * SizeOfItem, (index - 1) * SizeOfItem],
                        outputRange: [0, width],
                        // extrapolate:'clamp'
                    });
                    return (
                        <Animated.View
                            removeClippedSubviews={false}
                            style={{
                                position: 'absolute',
                                // width: translateX,
                                height,
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                source={{ uri: item.backdrop }}
                                style={{
                                    width,
                                    height: BACKDROP_HEIGHT,
                                    position: 'absolute',
                                }}
                            />
                        </Animated.View>
                    );
                }}
            />
            {/* <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'white']}
                style={{
                    height: BACKDROP_HEIGHT,
                    width,
                    position: 'absolute',
                    bottom: 0,
                }}
            /> */}
        </Animated.View>
    )
}

export default BackDrop

const styles = StyleSheet.create({})

// const Backdrop = ({ movies, scrollX }) => {
//     return(
//     <View style={{ height: BACKDROP_HEIGHT, width: width, position: 'absolute', backgroundColor: "red" }}>
//         <FlatList
//             data={movies}
//             horizontalS
//             keyExtractor={(item) => item.key}
//             renderItem={({ item, index }) => {
//                 // <MaskedView style={{ position: 'absolute' }}>
//                 <Text style={{ position: 'absolute', top: 0, left: 0, color: "black" }}>{item.title}</Text>
//                 {/* <Image
//                         source={{ uri: item.poster }}
//                         style={{
//                             width: width,
//                             height: BACKDROP_HEIGHT,
//                             resizeMode: 'cover'
//                         }}
//                     /> */}
//                 // </MaskedView>
//             }
//             }
//         />
//     </View>
//     )
// }