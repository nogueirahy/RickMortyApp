import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../service/graphql/homeQuery';
import CardCharacter from '../../components/CardCharacter';
import CardCharacterSkeleton from '../../components/CardCharacter/Skeleton';

import styles from './style';

interface IItem {
  name: string;
  status: string;
  image: string;
  id: string;
  type: string;
  species: string;
  location: {
    name: string;
  };
}

const DEFAULT_PAGE = 1;

export default () => {
  const scrollRef = useRef(null);

  const [mergedData, setMergedData] = useState<any>([]);
  const [nextPage, setNextPage] = useState(2);

  const { data, loading, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: {
      page: DEFAULT_PAGE,
    },
  });

  useEffect(() => {
    if (loading && !data) {
      return;
    }

    setMergedData([...mergedData, ...data.characters?.results]);
    setNextPage(data.characters?.info?.next);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  const renderItem = ({ item }: { item: IItem }) => (
    <CardCharacter item={item} />
  );

  if (loading) {
    return (
      <View style={styles.contentContainer}>
        <CardCharacterSkeleton />
        <CardCharacterSkeleton />
        <CardCharacterSkeleton />
        <CardCharacterSkeleton />
        <CardCharacterSkeleton />
        <CardCharacterSkeleton />
      </View>
    );
  }

  return (
    <FlatList
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      initialNumToRender={6}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      showsVerticalScrollIndicator={false}
      data={mergedData}
      renderItem={renderItem}
      onEndReached={() =>
        fetchMore({
          variables: {
            page: nextPage,
          },
        })
      }
      onEndReachedThreshold={0.4}
      keyExtractor={(item: IItem) => item.id}
    />
  );
};
