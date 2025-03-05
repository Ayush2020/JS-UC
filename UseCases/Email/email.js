const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

const validateEmail = (email) => {
  return emailRegex.test(email);
};

console.log("Email", "abc.xyz@bridgelabz.co.in is", `${validateEmail("abc.xyz@bridgelabz.co.inm") ? "valid" : "invalid"}`)