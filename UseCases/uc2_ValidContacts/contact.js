class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    
    validateName(name, fieldName) {
        let namepattern = /^[A-Z][a-zA-Z]{2,}$/;
        if(!namePattern.test(name)) {
            throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    validateAddress(value, fieldName) {
        if(value.length < 4){
            throw new Error(`${fieldName} must have at least 4 characters.`);
        }
        return value;
    }

    
    validateZip(zip) {
        let zipPattern = /^[1-9][0-9]{5}$/
        if (!zipPattern.test(zip)) {
            throw new Error("ZIP Code must be a 6-digit number.");
        }
    }

    
    validatePhone(phone) {
        let phonePattern = /^(\+91)?[6-9][0-9]{9}$/;
        if (!phonePattern.test(phone)) {
            throw new Error("Phone number must be in the format +91 9876543210.");
        }
        return phone;
    }

  
    validateEmail(email) {
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            throw new Error("Invalid email format.");
        }
        return email;
    }
}


export default Contact;
