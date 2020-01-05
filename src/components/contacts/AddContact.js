import React, { Component } from "react";
import { addContact } from "../../action/contactAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/AddContact.css";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    website: "",
    company: "",
    address: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, website, company, address } = this.state;
    const newContact = {
      name,
      phone,
      email,
      website,
      company,
      address
    };

    this.props.addContact(newContact);

    this.setState({
      name: "",
      email: "",
      phone: "",
      website: "",
      company: "",
      address: ""
    });

    this.props.history.push("/");
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, website, company, address } = this.state;
    return (
      <div className="container-form">
        <form onSubmit={this.handleSubmit}>
          <h1 className="add-contact">Add Contacts</h1>
          <label For=""></label>
          <input
            type="text"
            placeholder="entername"
            name="name"
            value={name}
            onChange={this.handleChange}
            className="input-inner"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="input-inner"
          />
          <input
            type="phone"
            placeholder="Enter phone number"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            className="input-inner"
          />
          <input
            type="text"
            placeholder="Enter your website"
            name="website"
            value={website}
            onChange={this.handleChange}
            className="input-inner"
          />
          <input
            type="text"
            placeholder="Enter company name"
            name="company"
            value={company.name}
            onChange={this.handleChange}
            className="input-inner"
          />
          <input
            type="address"
            placeholder="Enter your address"
            name="address"
            value={address.zipcode}
            onChange={this.handleChange}
            className="input-inner"
          />
          <button className="btn">SUBMIT</button>
        </form>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default connect(null, { addContact })(AddContact);
