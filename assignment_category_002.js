//NOTE: Problem-01 : VAT calculate

function calculateVAT(price) {
  if (
    typeof price === "string" ||
    Math.sign(price) === -1 ||
    Math.sign(price) === 0
  ) {
    let result = "Invalid";
    return result;
  }
  VAT = (price * 7.5) / 100;
  return VAT;
}

//NOTE: Problem-02 : Valid Contact

function validContact(contact) {
  // You have to write your code here
}

const first = "Abid";
const last = "Navid";

// const fullName = first + last;
const fullName = first + " " + last;
// console.log(fullName);
const fullName2 = first.concat(" ").concat(last);
console.log(fullName2);

// includes

console.log(last.includes("x"));
