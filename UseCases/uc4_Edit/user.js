import prompt from "prompt-sync";

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

// Address Book Class
class AddressBook {
    constructor() {
        this.contacts = [];
    }


    addContact() {
        console.log("\n Enter Contact Details:");
        let firstName = prompt("First Name: ");
        let lastName = prompt("Last Name: ");
        let address = prompt("Address: ");
        let city = prompt("City: ");
        let state = prompt("State: ");
        let zip = prompt("ZIP Code: ");
        let phone = prompt("Phone (+91 XXXXX-XXXXX): ");
        let email = prompt("Email: ");

        let newContact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
        this.contacts.push(newContact);
        console.log("\nContact Added Successfully!");
    }


    editContact() {
        let name = prompt("\n Enter First Name of Contact to Edit: ");
        let contact = this.contacts.find(c => c.firstName.toLowerCase() === name.toLowerCase());

        if (!contact) {
            console.log(` Contact with name "${name}" not found.`);
            return;
        }

        console.log("\n Enter New Details (Press ENTER to Keep Existing Value):");
        contact.firstName = prompt(`First Name (${contact.firstName}): `) || contact.firstName;
        contact.lastName = prompt(`Last Name (${contact.lastName}): `) || contact.lastName;
        contact.address = prompt(`Address (${contact.address}): `) || contact.address;
        contact.city = prompt(`City (${contact.city}): `) || contact.city;
        contact.state = prompt(`State (${contact.state}): `) || contact.state;
        contact.zip = prompt(`ZIP (${contact.zip}): `) || contact.zip;
        contact.phone = prompt(`Phone (${contact.phone}): `) || contact.phone;
        contact.email = prompt(`Email (${contact.email}): `) || contact.email;

        console.log("\n Contact Updated Successfully!");
    }

    // Display all contacts
    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("\nNo Contacts Available.");
            return;
        }

        console.log("\n Address Book Contacts:");
        this.contacts.forEach((c, index) => {
            console.log(`${index + 1}. ${c.firstName} ${c.lastName} -  ${c.city}, ${c.state} -  ${c.phone} -  ${c.email}`);
        });
    }
}

// Main Menu
function mainMenu() {
    let myAddressBook = new AddressBook();

    while (true) {
        console.log("1️Add New Contact");
        console.log("2️ Edit Existing Contact");
        console.log("3️ Display All Contacts");
        console.log("4️ Exit");

        let choice = prompt("Enter Your Choice: ");

        switch (choice) {
            case "1":
                myAddressBook.addContact();
                break;
            case "2":
                myAddressBook.editContact();
                break;
            case "3":
                myAddressBook.displayContacts();
                break;
            case "4":
                console.log("\n Exiting Address Book. Goodbye!");
                return;
            default:
                console.log("\n Invalid Choice! Please Enter 1-4.");
        }
    }
}


mainMenu();
