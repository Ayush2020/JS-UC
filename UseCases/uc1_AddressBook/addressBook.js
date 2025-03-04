const Contact = require("./Contact");

class AddressBook{
    constructor(){
        this.contacts = [];
    }
    addContact(contact){
        this.contacts.push(contact);
        console.log(`Contact added Succesfully`)
    }
    deleteContact(name){
        this.contacts = this.contacts.filter(contact => contact.firstName.toLowerCase() !== name.toLowerCase() &&
        contact.lastName.toLowerCase() !== name.toLowerCase());
        console.log(`Contact deleted`)
    } 
}
module.exports = AddressBook;