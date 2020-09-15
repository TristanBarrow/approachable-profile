import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import MenuItem from './MenuItem.js';
import ProfileImage from './ProfileImage.js';

// const template = require('../cradle/mainTemplate.js')

const STYLE = {
    color: '#4c8bf5',
}

const MainProfile = (props) => {

    const formatPhoneNumber = (number) => {
        if (number.length === 10) {
            return `(${number.slice(0,3)}) ${number.slice(3,6)}-${number.slice(6,10)}`;
        } else {
            return `(${number.slice(0,3)}) ${number.slice(3,6)}-${number.slice(6,10)} ext. ${number.slice(10,16)}`
        }
    }

    const formatAboutYou = (about) => {
        if (about === '') {
            return '--';
        } else {
            return about;
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Edit Profile</Text>
                <ProfileImage 
                    source={props.source}
                    onEdit={props.goToEditImage} 
                /> 
                <View style={styles.body}>
                    <MenuItem
                        label={'Name'}
                        content={props.name}
                        navigate={props.goToName}
                    />
                    <MenuItem 
                        label={'Phone'}
                        content={formatPhoneNumber(props.phone)}
                        navigate={props.goToPhone}
                    />
                    <MenuItem 
                        label={'Email'}
                        content={props.email}
                        navigate={props.goToEmail}
                    />
                    <MenuItem
                        label={'Tell us about your self'}
                        content={formatAboutYou(props.about)}
                        navigate={props.goToAbout}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    title: {
        color: '#4c8bf5',
        fontWeight: 'bold',
        fontSize: 32,
        marginTop: 100
    },
    image: {
        backgroundColor: 'black',
        width: 130,
        height: 130,
        borderRadius: 100,
        borderColor: STYLE.color,
        borderWidth: 6,
        marginTop: 20,
        marginBottom: 20
    },
    body: {
        width:'100%',
    }
});

export default MainProfile;