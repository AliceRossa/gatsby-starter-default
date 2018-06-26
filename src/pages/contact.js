import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Header from '../components/Header';
import styles from './contact.module.scss';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialState() {
    const initialState = {
      fields: {
        lastname: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      errors: {},
      formIsValid: true,
      formSent: null,
    };
    return initialState;
  }

  handleChange(event) {
    const { fields } = this.state;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields,
      formIsValid: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      const { fields } = this.state;
      fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.success) {
            this.setState(this.getInitialState());
            this.setState({ formSent: true });
          } else {
            this.setState({ formSent: false });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  validateForm() {
    const { fields } = this.state;
    const errors = {};
    let formIsValid = true;

    if (!fields.lastname) {
      formIsValid = false;
      errors.lastname = 'Entrez votre nom de famille.';
    }

    if (typeof fields.lastname !== 'undefined') {
      if (!fields.lastname.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors.lastname =
          'Veuillez entrer uniquement des caractères alphabétiques.';
      }
    }

    if (!fields.name) {
      formIsValid = false;
      errors.name = 'Entrez votre prénom.';
    }

    if (typeof fields.name !== 'undefined') {
      if (!fields.name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors.name =
          'Veuillez entrer uniquement des caractères alphabétiques.';
      }
    }

    if (!fields.email) {
      formIsValid = false;
      errors.email = 'Veuillez entrer votre adresse email.';
    }

    if (typeof fields.email !== 'undefined') {
      // regular expression for email validation
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
      );
      if (!pattern.test(fields.email)) {
        formIsValid = false;
        errors.email = 'Veuillez entrer une adresse email valide.';
      }
    }

    if (!fields.phone) {
      formIsValid = false;
      errors.phone = 'Veuillez entrer votre numéro de téléphone.';
    }

    if (typeof fields.phone !== 'undefined') {
      if (!fields.phone.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors.phone = 'Veuillez entrer un numéro de téléphone valide.';
      }
    }

    if (!fields.message) {
      formIsValid = false;
      errors.message = 'Entrez un message.';
    }

    this.setState({
      errors,
      formIsValid,
    });

    return formIsValid;
  }

  render() {
    const { fields, errors, formIsValid, formSent } = this.state;
    return (
      <div>
        <Helmet>
          <title>{`Contact | ${config.siteTitle}`}</title>
        </Helmet>

        <Header title="Contact" lead="Contactez-nous" />
        <section>
          <div className="container">
            {formSent && 'Message envoyé'}
            <form method="post" name="contactForm" onSubmit={this.handleSubmit} noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_lastname">Nom *</label>
                    <input
                      id="form_lastname"
                      type="text"
                      name="lastname"
                      className="form-control"
                      value={fields.lastname}
                      onChange={this.handleChange}
                      placeholder="Entrez votre nom de famille"
                      required="required"
                    />
                    {errors.lastname && <div className={styles.errorMsg}>{errors.lastname}</div>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_name">Prénom *</label>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      value={fields.name}
                      onChange={this.handleChange}
                      placeholder="Entrez votre prénom"
                      required="required"
                    />
                    {errors.name && <div className={styles.errorMsg}>{errors.name}</div>}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_email">Email *</label>
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      value={fields.email}
                      onChange={this.handleChange}
                      placeholder="Entrez votre email"
                      required="required"
                    />
                    {errors.email && <div className={styles.errorMsg}>{errors.email}</div>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_phone">Téléphone *</label>
                    <input
                      id="form_phone"
                      type="tel"
                      name="phone"
                      value={fields.phone}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Entrez votre numéro de téléphone"
                    />
                    {errors.phone && <div className={styles.errorMsg}>{errors.phone}</div>}
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
                      value={fields.message}
                      onChange={this.handleChange}
                      placeholder="Bonjour,"
                      rows="4"
                      required="required"
                    />
                    {errors.message && <div className={styles.errorMsg}>{errors.message}</div>}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center mt-4">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    disabled={!formIsValid}
                    value="Envoyer"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-muted">
                    <strong>*</strong> Ces champs sont obligatoires.
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
