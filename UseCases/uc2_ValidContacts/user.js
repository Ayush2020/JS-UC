

const prompt = require("prompt-sync")(); 

try {
    let firstName = prompt("Enter First Name: ");
    let lastName = prompt("Enter Last Name: ");
    let address = prompt("Enter Address: ");
    let city = prompt("Enter City: ");
    let state = prompt("Enter State: ");
    let zip = prompt("Enter ZIP Code: ");
    let phone = prompt("Enter Phone Number: ");
    let email = prompt("Enter Email: ");

    let contact = new contact(firstName, lastName, address, city, state, zip, phone, email);
    
    console.log("\n Contact successfully added:");
    console.log(contact);
} catch (error) {
    console.error("\n Error:", error.message);
}