import React from 'react';
import { Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Grayscale } from 'react-native-color-matrix-image-filters';
import styles from './styles';

interface IProps {
  status: string;
  image: string;
}

export default ({ status, image }: IProps) => {
  if (status === 'Dead') {
    return (
      <Grayscale>
        <FastImage
          style={styles.image}
          source={{
            uri: image,
            priority: FastImage.priority.high,
          }}
        />
      </Grayscale>
    );
  }

  if (status === 'unknown') {
    return (
      <FastImage
        style={styles.image}
        source={{
          uri: image,
          priority: FastImage.priority.high,
        }}
      >
        <Text style={styles.textImage}>{status}</Text>
      </FastImage>
    );
  }

  return (
    <FastImage
      style={styles.image}
      source={{
        uri: image,
        priority: FastImage.priority.high,
      }}
    />
  );
};
