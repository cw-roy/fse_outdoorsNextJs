import { useClient } from 'react-components';
import React, { PropsWithChildren } from 'react';
import Layout from './layout';
import HomePage from './HomePage';
import NationalParksSearchPage from './NationalParksSearchPage';

const Page: React.FC<PropsWithChildren<{}>> = () => {
  useClient(); // Marking the component as a client component

  return (
    <Layout>
      <HomePage />
      <NationalParksSearchPage />
    </Layout>
  );
};

export default Page;
