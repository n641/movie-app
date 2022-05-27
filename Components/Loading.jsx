import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View>
            <View style={styles.Looder}>
                <ActivityIndicator size="large" color={'blue'} />
            </View>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    Looder: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

