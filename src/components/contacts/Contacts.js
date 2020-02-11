import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import { getContacts } from "../../action/contactAction";
import Mailto from "react-protected-mailto";
import PropTypes from "prop-types";

class Contacts extends Component {
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.getContacts();
  }

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    let filteredContent = this.props.items.filter((contact) => {
      return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
    });

    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Names</th>
              <th>
                <div className="search-field">
                  <span className="search-field-icon">
                    <i className="fas fa-search" />
                  </span>{" "}
                  <input
                    type="text"
                    placeholder="search"
                    onChange={this.onChange}
                  />
                </div>
              </th>
            </tr>
          </thead>
        </table>

        {filteredContent.map((item) => (
          <Contact contact={item} key={item.id} />
        ))}
        <div className="contact-details">
          <div> Built by: Aliakwe</div>
          <div>
            <p>
              Phone: <Mailto className="edit-link" tel="08036329145" />
              <br />
              Email:{" "}
              <Mailto
                className="edit-link"
                email="aliakwe10@gmail.com"
                headers={
                  ({ subject: "Question from the website" },
                  { cc: "friend@coston.cool" })
                }
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  items: PropTypes.array,
  getContacts: PropTypes.func
};
const mapStateToProps = (state) => ({ items: state.contact.items });
export default connect(mapStateToProps, { getContacts })(Contacts);
