import React from 'react';
import { StyleSheet , Image } from 'react-native';
export const ImageViewer = (props) => {
    return(
        <>
            <Image style={styles.image} source={props.image ? {uri:props.image} : null} />
        </>
    );
}


const styles = StyleSheet.create({
    image: {
        height:150,
        width:150
    }
})

