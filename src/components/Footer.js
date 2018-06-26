import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  static propTypes = {
    copyright: PropTypes.string.isRequired,
  };

  render() {
    const { copyright } = this.props;
    return (
      <footer className="py-4 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">{copyright}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
