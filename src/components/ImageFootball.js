import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
//styles
import styles from "../styles/styles";
const ImageFootball = ({ key, title, error, image, width, height }) => {
    return (
        <Image style={{ width: width, height: height }} source={{ uri: image }} />
    )
}
export default ImageFootball;