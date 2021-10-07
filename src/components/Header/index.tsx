import React from 'react';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../Icons';
import styles from './styles';

export default () => {
  return (
    <SafeAreaView edges={['top', 'right', 'left']} style={styles.container}>
      <Pressable hitSlop={{ left: 25, right: 25 }} onPress={() => undefined}>
        <Icons.Logo style={styles.icon} />
      </Pressable>
    </SafeAreaView>
  );
};
