import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SearchPage = () => {
  return (
    <Layout pageName="search">
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Container type="content">
        <h1>Search</h1>
      </Container>
    </Layout>
  );
};

export default SearchPage;
