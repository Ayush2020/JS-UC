//uc2
let regex = /^\d{3}\d{3}$/
const pinCode = "400088B"
console.log("PIN code", `${pinCode} ${regex.test(pinCode) ? 'Is valid' : 'is not valid'}`)

