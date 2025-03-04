class AddressBook {
    constructor() {
        this.contacts = [];
    }

 
    addContact(contact) {
        if (this.contacts.some(c => c.phone === contact.phone)) {
            throw new Error("A contact with this phone number already exists.");
        }
        this.contacts.push(contact);
        console.log(" Contact added successfully!");
    }

   
    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
            return;
        }
        console.log("\n Address Book:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.phone}`);
        });
    }
}


export default AddressBook;
