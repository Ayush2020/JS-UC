const prompt = require('prompt-sync')();
const Contact = require('./Contact');
const AddressBook = require(`./AddressBook');`)

const myAddressBook = new AddressBook();



while(true){
    console.log("\n Address Book Menu:");
    console.log("1. Add Contact");
    console.log("2. Delete Contact");
    console.log("3. Exit");
}

let choice = prompt(`Enter the choice`)
switch(choice){
    case '1':
        let firstName = prompt("First Name: ");
        let lastName = prompt("Last Name: ");
        let address = prompt("Address: ");
        let city = prompt("City: ");
        let state = prompt("State: ");
        let zip = prompt("Zip Code: ");
        let phone = prompt("Phone Number: ");
        let email = prompt("Email: ");

        let newContact = newContact(firstName, lastName, address, city, state, zip, phone, email);
        myAddressBook.addContact(newContact);
        break;

    case `2`:
        let deleteName = prompt("Enter the contact's name to delete: ");
        myAddressBook.deleteContact(deleteName);
        break;

    case `3`:
        console.log("Exiting...");
        process.exit(0);
        break;
    default:
        console.log("Invalid choice. Please try again.");
}
