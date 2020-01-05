import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import { getContacts } from "../../action/contactAction";
import Mailto from "react-protected-mailto";
import PropTypes from "prop-types";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map((item) => (
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
  items: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({ items: state.contact.items });
export default connect(mapStateToProps, { getContacts })(Contacts);
