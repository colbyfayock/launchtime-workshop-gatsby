import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * @lesson-02-todo
 * In order to build our map, we need to import out components.
 * How can we add those to our project?
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
