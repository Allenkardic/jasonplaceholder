import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../action/contactAction";
import { Link } from "react-router-dom";
import "../../css/Contact.css";

class Contact extends Component {
  state = { toggle: false };
  onClickToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  onClickDelete = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    const {
      id,
      name,
      email,
      phone,
      website,
      company,
      address
    } = this.props.contact;

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                {" "}
                {name}{" "}
                <i
                  onClick={this.onClickToggle}
                  className="fas fa-caret-down contact-down"
                />
              </td>
              <td>
                <i
                  className="fas fa-trash-alt contact-delete"
                  onClick={this.onClickDelete.bind(this, id)}
                />

                <Link to={`/editcontact/${id}`}>
                  <i className="fas fa-user-edit contact-edit" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        {this.state.toggle ? (
          <ul className="container-inner">
            <li className="container-inner-li">
              Email: <span className="container-inner-content">{email}</span>
            </li>
            <li className="container-inner-li">
              Phone: <span className="container-inner-content">{phone}</span>
            </li>
            <li className="container-inner-li">
              Website:{" "}
              <span className="container-inner-content">{website}</span>
            </li>
            <li className="container-inner-li">
              Company name:{" "}
              <span className="container-inner-content">{company.name}</span>
            </li>
            <li className="container-inner-li">
              Zipcode:{" "}
              <span className="container-inner-content">{address.zipcode}</span>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};
export default connect(null, { deleteContact })(Contact);
