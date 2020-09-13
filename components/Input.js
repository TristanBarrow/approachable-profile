import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.prompt}>{props.prompt}</Text>
            <TextInput 
                style={{...styles.input, height: props.height}}
                placeholder={props.placeholder || '--'}
                onChangeText={val => props.onChange(val)}
                value={props.value}
                multiline={!!props.wraptext}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
    },
    prompt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'lightgray',
        paddingBottom: 8
    },
    input: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

  
export default Input;