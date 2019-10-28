import React, { Component } from "react";
import { Consumer } from "../context";
import Input from "../components/Input";
import axios from "axios";

class AddContact extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { firstname, lastname, email, phone } = this.state;

    // Check for errors
    if (firstname === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (lastname === "") {
        this.setState({ errors: { name: "Name is required" } });
        return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      phoneNumber: phone
    };

    //console.log(newContact);

    //save-user API will sign unique id for new user
    const res = await axios.post(
        `http://localhost:8080/users/save-user/`, 
        newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    // Clear state
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { firstname, lastname, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header"><h4>Add Contact</h4></div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <Input
                    label="First Name"
                    name="firstname"
                    placeholder="Enter First Name"
                    value={firstname}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <Input
                    label="Last Name"
                    name="lastname"
                    placeholder="Enter Last Name"
                    value={lastname}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-dark btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
