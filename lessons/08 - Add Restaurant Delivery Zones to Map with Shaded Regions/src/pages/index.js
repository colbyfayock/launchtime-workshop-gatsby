import React from 'react';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Hero from 'components/Hero';
import FormSearch from 'components/FormSearch';

import Logo from 'components/Logo';

const IndexPage = () => {

  /**
   * handleOnSearchSubmit
   */

  function handleOnSearchSubmit({ fields = [] } = {}) {
    const what = fields.find(field => field.name === 'search-what')?.value;
    const where = fields.find(field => field.name === 'search-where')?.value;

    navigate(`/search?what=${encodeURIComponent(what)}&where=${encodeURIComponent(where)}`);
  }

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Container>
        <Hero backgroundImage="/images/people-in-restaurant-eating.jpg">
          <FormSearch onSearch={handleOnSearchSubmit} />
        </Hero>
      </Container>

      <Container type="content" className="text-center">

        <div className="home-intro">
          <h2>
            <Logo />
          </h2>
          <p>Lunch doesn&apos;t have to be rocket science!</p>
        </div>

      </Container>
    </Layout>
  );
};

export default IndexPage;
