import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

const MenuItem = (props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.navigate}
        >
            <View style={styles.textContainer}>
                <Text style={styles.label}>{props.label}</Text>
                <Text style={styles.content}>{props.content}</Text>
            </View>
            <View style={styles.icon}>
                <Icon size={23} color='gray' name='right'/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingLeft: 8,
    },
    textContainer: {
        maxWidth: '87%'
    },
    label: {
        fontWeight: 'bold',
        color: 'lightgray',
        marginVertical: 8,

    },
    content: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    icon: {
        justifyContent: 'center',
        marginRight: 5
    }
});

export default MenuItem;