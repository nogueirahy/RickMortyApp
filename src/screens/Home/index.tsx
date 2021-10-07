import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';

import CardCharacter from '../../components/CardCharacter';
import mockData from './mockData';
import styles from './style';

export default () => {
  const scrollRef = useRef(null);

  const renderItem = ({ item }) => <CardCharacter item={item} />;
  const keyExtractor = (item) => item.id;

  return (
    <FlatList
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      initialNumToRender={6}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      showsVerticalScrollIndicator={false}
      data={mockData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
