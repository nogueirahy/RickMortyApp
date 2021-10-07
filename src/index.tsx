import { ApolloProvider } from '@apollo/client';
import React from 'react';

import client from './service/graphql/apolloClient';
import RootNavigation from './navigation';

export default () => {
  return (
    <ApolloProvider client={client}>
      <RootNavigation />
    </ApolloProvider>
  );
};
