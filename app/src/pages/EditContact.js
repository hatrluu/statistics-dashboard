import React, { Component } from 'react';
import { Consumer } from '../context';
import Input from '../components/Input';
import axios from 'axios';

class EditContact extends Component {
  state = {
    id: Number,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    //const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const myContacts = await axios.get(`http://localhost:8080/users/get-users`);
    //const myContacts = await axios.get('./contacts.json');
    const contact = myContacts.data[id - 1];
    //console.log(contact);
    this.setState({
      id: parseInt(id, 10),
      firstname: contact.firstName,
      lastname: contact.lastName,
      email: contact.email,
      phone: contact.phoneNumber
    });
    //console.log(this.state);
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { id, firstname, lastname, email, phone } = this.state;

    // Check for errors
    if (firstname === '') {
      this.setState({ errors: { firstname: 'First name is required' } });
      return;
    }

    if (lastname === '') {
      this.setState({ errors: { lastname: ' Last name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone number is required' } });
      return;
    }

    const updContact = {
      id: id,
      firstName: firstname,
      lastName: lastname,
      email: email,
      phoneNumber: phone
    };

    //console.log(updContact);

    //update-user API will parse id feature in updContact as select query condition
    const res = await axios.put(
      `http://localhost:8080/users/update-user/`,
      updContact
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    // Clear state
    this.setState({
      id: null,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
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
              <div className="card-header"><h4>Edit Contact</h4></div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <Input
                    label="First Name"
                    name="firstname"
                    placeholder="Enter First Name"
                    value={firstname}
                    onChange={this.onChange}
                    error={errors.firstname}
                  />
                  <Input
                    label="Last Name"
                    name="lastname"
                    placeholder="Enter Last Name"
                    value={lastname}
                    onChange={this.onChange}
                    error={errors.lastname}
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
                    label="Phone Number"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
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

export default EditContact;
