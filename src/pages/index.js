import React from 'react';
import NormalizedLayout from '../components/NormalizedLayout';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <NormalizedLayout>
    <Helmet>
      <html lang="da" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          display: 'inline-block',
          margin: 0,
          fontFamily:
            '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
        }}
      >
        Ja
      </h1>
    </div>
  </NormalizedLayout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
