import React, { Component } from 'react';

// Constants
import {CONTACTS_AUTHORS_ROUTE} from './contacts-authors.constants';

class ContactsAuthorsComponent extends Component {
  static path = CONTACTS_AUTHORS_ROUTE

  render() {
    return <div>Contacts authors component</div>;
  }
}

export default ContactsAuthorsComponent;
