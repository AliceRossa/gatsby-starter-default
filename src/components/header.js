import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

class Header extends React.Component {
  static propTypes = {
    backgroundImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    lead: PropTypes.string,
  };

  static defaultProps = {
    backgroundImage: 'https://unsplash.it/1900/1080?image=1076',
    lead: '',
  };

  render() {
    const { backgroundImage, title, lead } = this.props;
    return (
      <header
        className={`py-5 ${styles.root}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mt-5 text-center">
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </header>
    );
  }
}

export default Header;
