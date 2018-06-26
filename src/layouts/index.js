import 'modern-normalize/modern-normalize.css';
import 'bootstrap/scss/bootstrap.scss';

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './index.module.scss';

class MainLayout extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired, // eslint-disable-line
  };

  render() {
    const { location, children, data } = this.props;
    return (
      <div>
        <Helmet>
          <html lang={data.site.siteMetadata.siteLanguage} />
          <title>{config.siteTitle}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.siteDescription}
          />
        </Helmet>
        <Nav
          siteTitle={data.site.siteMetadata.siteTitle}
          pathname={location.pathname}
        />
        {children()}
        <Footer copyright={data.site.siteMetadata.rssMetadata.copyright} />
      </div>
    );
  }
}

export default MainLayout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        siteTitle
        siteDescription
        siteLanguage
        rssMetadata {
          copyright
        }
      }
    }
  }
`;
