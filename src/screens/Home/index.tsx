import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FlatList, View } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../service/graphql/homeQuery';
import useNextPage from '../../hooks/useNextPage';

import CardCharacter from '../../components/CardCharacter';
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
  const [mergeData, setMergeDate] = useState<any>([]);
  const [totalPages, setTotalPages] = useState(DEFAULT_PAGE);

  const { data, loading, refetch } = useQuery(GET_CHARACTERS, {
    variables: {
      page: DEFAULT_PAGE,
    },
  });

  useEffect(() => {
    const hasData = loading === false && data;
    if (hasData) {
      const { results, info } = data?.characters;
      setMergeDate([...mergeData, ...results]);
      setTotalPages(info.pages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data]);

  const doRequestNextPage = useCallback(
    async (page: number) => {
      setTotalPages(30);
      refetch({ page });
    },
    [refetch],
  );

  const callNextPage = useNextPage({
    callback: doRequestNextPage,
    totalPages,
  });

  const renderItem = ({ item }: { item: IItem }) => (
    <CardCharacter item={item} />
  );

  return (
    <FlatList
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      initialNumToRender={6}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      showsVerticalScrollIndicator={false}
      data={mergeData}
      renderItem={renderItem}
      onEndReached={callNextPage}
      onEndReachedThreshold={0.3}
      keyExtractor={(item: IItem) => item.id}
    />
  );
};
