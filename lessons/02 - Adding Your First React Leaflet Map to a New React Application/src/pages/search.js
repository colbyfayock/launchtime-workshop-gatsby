import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * @lesson-02-todo
 * We want to our map to be able to take up as much space
 * as possible within our viewport. How can we remove the
 * extra padding only on the Search Page?
 */

import Layout from 'components/Layout';
import Container from 'components/Container';

const SearchPage = () => {
  return (
    <Layout pageName="search">
      <Helmet>
        <title>Search</title>
      </Helmet>
      { /**
         * @lesson-02-todo
         * We want to add our first map to the app. Using the
         * the components we just imported above, how can we
         * configure the props to show our map?
         */ }
      <Container type="content">
        <h1>Search</h1>
      </Container>
    </Layout>
  );
};

export default SearchPage;
