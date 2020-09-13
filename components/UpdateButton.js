import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const UpdateButton = (props) => {
    return (
        <TouchableOpacity style={{...styles.opacity, ...props.style}} onPress={props.onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Update
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    opacity: {},
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: 66,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,

    }
});

export default UpdateButton;