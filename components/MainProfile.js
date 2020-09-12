import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import MenuItem from './MenuItem';

const MainProfile = (props) => {
    return (
        <SafeAreaView>
            <Text>Edit Profile</Text>
            <View>
                <Text>image</Text>
            </View>
            <MenuItem />
        </SafeAreaView>
    );
}

export default MainProfile;