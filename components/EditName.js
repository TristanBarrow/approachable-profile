import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import UpdateButton from './UpdateButton';
import Input from './Input.js';
import CloseIcon from './CloseIcon';

const EditPhone = (props) => {
    const [firstName, onChangeFirst] = useState(props.value.first)
    const [lastName, onChangeLast] = useState(props.value.last)
    const [error, setError] = useState('');

    const validate = (first, last) => {
        if (first !== '' && last !== '') {
            props.onSubmit(firstName, lastName);
        } else {
            setError('Please make sure there is something in both fields.')
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.upperContainer}>
                <CloseIcon style={styles.icon} onPress={props.goBack}/>
                <Text style={styles.question}>What's your name?</Text>
                <View style={styles.textBoxes}>
                    <Input
                        style={styles.input}
                        prompt={'First Name'}
                        onChange={onChangeFirst}
                        value={firstName}
                    />
                    <Input
                        style={styles.input}
                        prompt={'Last Name'}
                        onChange={onChangeLast}
                        value={lastName}
                    />
                </View>
                <Text style={styles.error}>{error}</Text>
            </View>
            <UpdateButton
                style={styles.button}
                onPress={() => validate(firstName, lastName)}
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        marginHorizontal: 40,
        height: '100%'
    },
    upperContainer: {
        justifyContent: "flex-start",
        height: '70%',
        flex: .6,
    },
    icon: {
        marginTop: 20
    },
    question: {
        marginTop: 40,
        fontSize: 25,
        fontWeight: 'bold',
    },
    textBoxes: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    input: {
        width: '47.5%'
    },
    error: {
        marginTop: 10,
        color: 'red'
    },
    button: {
        marginBottom: 40
    }
});

export default EditPhone;