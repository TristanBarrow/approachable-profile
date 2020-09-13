import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import UpdateButton from './UpdateButton';
import Input from './Input.js';
import CloseIcon from './CloseIcon';

const EditPhone = (props) => {
    const [value, onChange] = useState(props.value);
    const [error, setError] = useState('');
    
    const validation = () => {
        if (value.match(/^\S+@\S+\.\S+$/)) {
            console.log('success');
            props.onSubmit(value);
        } else {
            console.log('fail')
            setError('You must input a valid email.')
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.upperContainer}>
                <CloseIcon  style={styles.icon} onPress={props.goBack}/>
                <Text style={styles.question}>What is your email?</Text>
                <Input
                    style={styles.input}
                    prompt={'Your email address'}
                    onChange={onChange}
                    value={value}
                />
                <Text style={styles.error}>{error}</Text>
            </View>
            <UpdateButton
                style={styles.button}
                onPress={validation} 
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
        marginTop: 40,
    },
    input: {
        marginTop: 40
    },
    error: {
        color: 'red'
    },
    button: {
        marginBottom: 40,
    }
});

export default EditPhone;