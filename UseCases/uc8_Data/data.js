//create a new class Address Book with appropriate fields and export it
class AddressBook{
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
        this.#validate(firstName, lastName, address, city, state, zip, phoneNumber, email)
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }


    //u2
    #validate(...args){
        let validateName = /^[A-Z]+[a-zA-Z]{2,}$/
        let validateAddress = /[A-Za-z0-9]{4,}/
        let validateZip = /[ a-z0-9]{6,}/
        let validatePhoneNumber1 = /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/
        let validatePhoneNumber2 = /[0-9]{10}/
        let validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if(!validateName.test(args[0]) || 
        !validateName.test(args[1]) ||
         !validateAddress.test(args[2]) || 
         !validateAddress.test(args[3]) ||
         !validateAddress.test(args[4]) || 
         !validateZip.test(args[5]) ||
         !(!validatePhoneNumber1.test(args[6]) || !validatePhoneNumber2.test(args[6])) ||
          !validateEmail.test(args[7])){
            throw new Error('Invalid input')
          }
    }
}

//uc-3
let addressBooks = [];
function addAddressBooks(addressBook){
    addressBooks.push(addressBook);
}

//uc-4
function updateAddressBook(firstName, updateAddressBook){
    for(let addressBook of addressBooks){
        if(addressBook.firstName === firstName){
            Object.assign(addressBook, updateAddressBook);
            return;
        }
    }
}

//uc-5
function deleteAddressBook(firstName){
    addAddressBooks = addressBooks.filter(addressBook => addressBook.firstName !== firstName);
}

//uc6
function getNumberOfContacts(){
    return addressBooks.reduce((length,_) => length+1,0)
}

//uc7
function removeDuplicates(){
    let uniqueAddressBooks = [...new Set(addressBooks)];
    addressBooks = uniqueAddressBooks;
}

//uc8
function findByCity(city){
    return addressBooks.filter(addressBook => addressBook.city === city);
}

function findByState(state){
    return addressBooks.filter(addressBook => addressBook.state === state);
}