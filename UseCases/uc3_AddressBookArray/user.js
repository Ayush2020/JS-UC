import Contact from "./contact";
import AddressBook from "./AddressBook";
import PromptSync from "prompt-sync";

const addressBook = new AddressBook();

while (true) {
    console.log("\n1. Add Contact");
    console.log("2. Display Contacts");
    console.log("3. Exit");

    let choice = prompt("Enter your choice: ");

    switch (choice) {
        case "1":
            try {
                let firstName = prompt("Enter First Name: ");
                let lastName = prompt("Enter Last Name: ");
                let address = prompt("Enter Address: ");
                let city = prompt("Enter City: ");
                let state = prompt("Enter State: ");
                let zip = prompt("Enter ZIP Code: ");
                let phone = prompt("Enter Phone Number: ");
                let email = prompt("Enter Email: ");

                let newContact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
                addressBook.addContact(newContact);
            } catch (error) {
                console.error("\n Error:", error.message);
            }
            break;

        case "2":
            addressBook.displayContacts();
            break;

        case "3":
            console.log(" Exiting Address Book.");
            process.exit(0);

        default:
            console.log("Invalid choice, please try again.");
    }
}
