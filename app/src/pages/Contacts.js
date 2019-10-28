import React, { Component } from "react";
import SearchBar from '../components/SearchBar';
import Contact from "../components/Contact";
import { Consumer } from "../context";

// this.contactList.forEach(contact => {
//   if (contact.firstName.toLowerCase().indexOf(input.toLowerCase()) == 0) //Compare by first name
//              || contact.lastName.toLowerCase().indexOf(input.toLowerCase()) > -1) //Compare by last name
//   {
//         return contact
//   }

class Contacts extends Component {

  constructor(props) {

    super(props);
    this.state = {
      searchText: '',
      searchResult: []
    }

    // this.handleNewContact = this.handleNewContact.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    // //this.returnContactList = this.returnContactList.bind(this);
  }

  handleSearch(contacts, searchText) {
   
    console.log(contacts);
    console.log(searchText);
    this.setState({searchResult: [], searchText: searchText});
    contacts.map(contact => {
      if(searchContact(contact, searchText)) {
         this.setState( prevState => ({
           searchResult: [...prevState.searchResult, contact]
         }))
      }
    })
  }

  returnContactList(contacts) {
    return this.state.searchText ? this.state.searchResult : contacts;
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              <div className="input-group ">
                  <input onChange={(event) => this.handleSearch(contacts, event.target.value)} className="form-control" type="search" placeholder="Search for a contact" id="example-search-input" />
                  <button className="btn btn-default" type="button">
                      <i className="fa fa-search"></i>
                  </button>
              </div>
              <br />
           		{ this.returnContactList(contacts).map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

const searchContact = (contact, searchText) => (
  contact.firstName.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
  contact.lastName.toLowerCase().search(searchText.toLowerCase()) !== -1
)

export default Contacts;
