import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import UpdateButton from './UpdateButton';
import Input from './Input.js';
import CloseIcon from './CloseIcon';

const EditPhone = (props) => {
    const [value, onChange] = useState(props.value)
    // add keyboard avoiding view.
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.upperContainer}>
                <CloseIcon style={styles.icon} onPress={props.goBack}/>
                <Text style={styles.question}>What type of passenger are you?</Text>
                <Input
                    style={styles.input}
                    prompt={'Write a little bit about yourself.'}
                    placeholder={'Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.'}
                    height={130}
                    wraptext={true}
                    onChange={onChange}
                    value={value}
                />
            </View>
            <UpdateButton
                style={styles.button}
                onPress={() => props.onSubmit(value)}

            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        height: '100%',
        marginHorizontal: 40
    },
    upperContainer: {},
    icon: {
        paddingTop: 20
    }, 
    question: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 40,
    },
    input: {
        marginTop: 40,
        height: 180
    },
    button: {
        paddingBottom: 40
    }
});

export default EditPhone;