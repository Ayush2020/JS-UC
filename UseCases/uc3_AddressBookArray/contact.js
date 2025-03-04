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

    // Validate Name: Starts with a capital letter, at least 3 characters
    validateName(name, fieldName) {
        const pattern = /^[A-Z][a-zA-Z]{2,}$/;
        if (!pattern.test(name)) throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        return name;
    }

    // Validate Address, City, State: At least 4 characters
    validateAddress(value, fieldName) {
        if (!value || value.length < 4) throw new Error(`${fieldName} must have at least 4 characters.`);
        return value;
    }

    // Validate ZIP Code: Exactly 6 digits, no leading zero
    validateZip(zip) {
        const pattern = /^[1-9][0-9]{5}$/;
        if (!pattern.test(zip)) throw new Error("ZIP Code must be a 6-digit number.");
        return zip;
    }

    // Validate Phone Number: Supports Indian format with or without +91
    validatePhone(phone) {
        const pattern = /^(\+91\s?)?[6-9][0-9]{9}$/;
        if (!pattern.test(phone)) throw new Error("Phone number must be a valid 10-digit number, optionally prefixed with +91.");
        return phone;
    }

    // Validate Email: Standard format check
    validateEmail(email) {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!pattern.test(email)) throw new Error("Invalid email format.");
        return email;
    }
}

export default Contact;
