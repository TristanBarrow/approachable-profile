import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const CloseIcon = (props) => {
    return (
        <TouchableOpacity 

            style={{...props.style, width: 30}}
            onPress={props.onPress} 
        >
            <Icon size={30} color='gray' name='arrowleft'/>
        </TouchableOpacity>
    )
}


export default CloseIcon;
