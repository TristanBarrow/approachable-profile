import React from 'react';
import { View, Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import UpdateButton from './UpdateButton';
import CloseIcon from './CloseIcon';
import ImagePicker from 'react-native-image-crop-picker';

const EditImage = (props) => {

    const openImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            props.onSubmit(image.sourceURL);
        }).catch((error) => {
            console.log("Error in Edit Image")
            console.log(error);
        });
    }
   



    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.upperContainer}>
                <CloseIcon style={styles.icon} onPress={props.goBack}/>
                <Text style={styles.question}>Upload a photo of your self: </Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={props.source} />
                </View>
            </View>
            <UpdateButton
                style={styles.button}
                onPress={openImagePicker}
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
    imageContainer: {
        alignItems: 'center',
        width: '100%',
        height: 300,
        overflow: 'hidden'
    },
    image: {
        width: 400,
        height: 300,
        marginTop: 40,
        aspectRatio: 1,
    },
    button: {
        marginBottom: 40,
    }
});

export default EditImage;