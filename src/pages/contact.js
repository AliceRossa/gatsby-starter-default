import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Header from '../components/Header';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(`Name: ${this.state.name}`);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{`Contact Page | ${config.siteTitle}`}</title>
        </Helmet>

        <Header title="Contact" lead="Contact Us" />
        <section>
          <div className="container">
            <div className="messages" />
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_name">Firstname *</label>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      defaultValue={this.state.name}
                      onChange={this.handleChange}
                      placeholder="Please enter your firstname *"
                      required="required"
                      data-error="Firstname is required."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_lastname">Lastname *</label>
                    <input
                      id="form_lastname"
                      type="text"
                      name="surname"
                      className="form-control"
                      defaultValue={this.state.surname}
                      onChange={this.handleChange}
                      placeholder="Please enter your lastname *"
                      required="required"
                      data-error="Lastname is required."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group has-error has-danger">
                    <label htmlFor="form_email">Email *</label>
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      defaultValue={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Please enter your email *"
                      required="required"
                      data-error="Valid email is required."
                    />
                    <div className="help-block with-errors">
                      <ul className="list-unstyled">
                        <li>Valid email is required.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_phone">Phone</label>
                    <input
                      id="form_phone"
                      type="tel"
                      name="phone"
                      defaultValue={this.state.phone}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Please enter your phone"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="form_message">Message *</label>
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control"
                      value={this.state.message}
                      onChange={this.handleChange}
                      placeholder="Message for me *"
                      rows="4"
                      required="required"
                      data-error="Please, leave us a message."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12 text-center mt-4">
                  <input
                    type="submit"
                    className="btn btn-success btn-send disabled"
                    value="Send message"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-muted">
                    <strong>*</strong> These fields are required.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactPage;
