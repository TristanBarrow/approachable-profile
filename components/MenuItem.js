import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const MenuItem = (props) => {
    return (
        <View>
            <Text>name</Text>
            <Text>Micah Smith</Text>
            <Icon name='right'/>
        </View>
    );
}

export default MenuItem;