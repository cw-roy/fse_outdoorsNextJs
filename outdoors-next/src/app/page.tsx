import React, { PropsWithChildren, useClient } from 'react';
import Layout from './layout';
import HomePage from './HomePage';
import NationalParksSearchPage from './NationalParksSearchPage';

const Page: React.FC<PropsWithChildren<{}>> = () => {
  useClient();
  
  return (
    <Layout>
      <HomePage />
      <NationalParksSearchPage />
    </Layout>
  );
};

export default Page;
