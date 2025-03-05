//uc2
let regex = /^[0-9]{6,}$/
const pinCode = "A400088"
console.log("PIN code", `${pinCode} ${regex.test(pinCode) ? 'Is valid' : 'is not valid'}`)