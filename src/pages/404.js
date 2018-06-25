import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import config from '../../data/SiteConfig';
import Header from '../components/Header';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`Page non trouvée - Erreur 404 | ${config.siteTitle}`}</title>
        </Helmet>

        <Header title="Page non trouvée - Erreur 404" />
        <section>
          <div className="container">
            <h2>Page non trouvée - Erreur 404</h2>
            <p>La page que vous cherchez n&apos;existe pas ou plus.</p>
            <Link to="/">Retourner à l&apos;accueil</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default NotFoundPage;
