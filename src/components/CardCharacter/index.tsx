import React from 'react';
import { Text, View, Pressable } from 'react-native';
import StatusImage from '../StatusImage';
import styles from './styles';

export default ({ item }: { item: any }) => {
  return (
    <>
      <View style={styles.divider} />
      <Pressable style={styles.contentContainer} onPress={() => undefined}>
        <View style={styles.containerImage}>
          <StatusImage status={item.status} image={item.image} />
        </View>

        <View style={styles.containerTitle}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.titleDivider} />
          <Text style={styles.description}>{item.species}</Text>
          <Text style={styles.description}>{item.location.name}</Text>
        </View>
      </Pressable>
    </>
  );
};
