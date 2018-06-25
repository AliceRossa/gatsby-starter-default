import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import config from '../../data/SiteConfig';
import Header from '../components/Header';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`Index Page | ${config.siteTitle}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>

        <Header
          title={config.siteTitle}
          lead="A landing page template freshly redesigned for Bootstrap 4"
        />
        <section>
          <div className="container">
            <h2>
              <Link to="/contact/">About this page</Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              suscipit, rerum quos facilis repellat architecto commodi officia
              atque nemo facere eum non illo voluptatem quae delectus odit vel
              itaque amet.
            </p>
            <Link to="/contact/">Go to contact page</Link>
          </div>
        </section>
        <section className="bg-light">
          <div className="container">
            <h2>
              <Link to="/contact/">Services we offer</Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              optio velit inventore, expedita quo laboriosam possimus ea
              consequatur vitae, doloribus consequuntur ex. Nemo assumenda
              laborum vel, labore ut velit dignissimos.
            </p>
            <Link to="/contact/">Go to contact page</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default IndexPage;
