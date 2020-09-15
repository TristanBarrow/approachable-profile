import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileImage = (props) => {
    // const source = props.static ? (
    //         require('../res/profile.jpg')
    //     ) : ({uri: props.uri, isStatic: true});

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={props.onEdit}
                style={styles.touchable}
            >
                <View style={styles.edit}>
                    <Icon name='edit' size={24} color={'#4c8bf5'} />
                </View>
            </TouchableOpacity>
            <Image
                style={styles.image}
                source={props.source} 
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    touchable: {
        zIndex: 2
    },
    edit: {
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        top: 20,
        height: 40,
        width: 40,
        borderRadius: 100,
        zIndex: 2,
    },  
    image: {
        backgroundColor: 'black',
        width: 130,
        height: 130,
        borderRadius: 100,
        borderColor: '#4c8bf5',
        borderWidth: 6,
        marginTop: 20,
        marginBottom: 20,
        zIndex: 1,
    }
});

export default ProfileImage;