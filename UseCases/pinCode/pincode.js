<<<<<<< HEAD
//uc2
let regex = /^\d{3}\s?\d{3}$/
const pinCode = "400 088"
const pinCode2 = "400088"
console.log("PIN code", `${pinCode} ${regex.test(pinCode) ? 'Is valid' : 'is not valid'}`)
console.log("PIN code 2", `${pinCode2} ${regex.test(pinCode) ? 'Is valid' : 'is not valid'}`)
=======
let regex = /^[0-9]{6,}$/
const pinCode = "400088"
console.log("PIN code", `${pinCode} ${regex.test(pinCode) ? 'Is valid' : 'is not valid'}`)
>>>>>>> uc1_pinCode
