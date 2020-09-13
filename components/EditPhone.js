import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import UpdateButton from './UpdateButton';
import Input from './Input.js';
import CloseIcon from './CloseIcon';

const EditPhone = (props) => {
    const [value, onChange] = useState(props.value)
    const [error, setError] = useState('');

    const validateChange = (val) => {
        console.log('new', val)
        console.log('old', value)
        if (val.match(/^\d+$/) || val.length === 0) {
            console.log(true);
            setError('')
        } else {
            setError('This field will only accept numbers.')
        }
        onChange(val);
    }

    const validateSubmit = () => {
        if (value.match(/^\d+$/) && value.length >= 10 && value.length <= 16) {
            console.log('good')
            props.onSubmit(value);
        } else {
            console.log('bad')
            setError('Your number must be between 10 and 16 digits long.')
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.upperContainer}>
                <CloseIcon style={styles.icon} onPress={props.goBack}/>
                <Text style={styles.question}>What is your phone number?</Text>
                <Input
                    style={styles.input}
                    prompt={'Your phone number'}
                    onChange={validateChange}
                    value={value}
                />
                <Text style={styles.error}>{error}</Text>
            </View>
            <UpdateButton
                style={styles.button}
                onPress={validateSubmit} 
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        height: '100%',
        marginHorizontal: 40,
    },
    upperContainer: {},
    icon: {
        marginTop: 20
    },
    question: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 40
    },
    input: {
        marginTop: 40
    },
    error: {
        color: 'red'
    },
    button: {
        marginBottom: 40
    }
});

export default EditPhone;