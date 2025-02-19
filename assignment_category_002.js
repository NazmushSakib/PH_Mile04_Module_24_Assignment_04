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
  if (typeof contact !== "string") {
    const output = "Invalid";
    return output;
  }
  if (
    contact.length == 11 &&
    contact[0] == 0 &&
    contact[1] == 1 &&
    contact.includes(" ") == false &&
    isNaN(Number(contact)) == false &&
    Number(contact) !== Infinity
  ) {
    let isValid = true;
    return isValid;
  }
  isValid = false;
  return isValid;
}

//
//NOTE: Problem-03 : Valid Contact
function willSuccess(marks) {
  if (Array.isArray(marks) == false) {
    const outpu = "Invalid";
    return outpu;
  }
  if (marks.length == 0) {
    return false;
  }
  let pass = [];
  let fail = [];
  for (const mark of marks) {
    if (mark < 50) {
      fail.push(mark);
    }
    if (mark >= 50) {
      pass.push(mark);
    }
  }

  if (pass.length > fail.length) {
    let result = true;
    return result;
  } else {
    result = false;
    return result;
  }
}

//NOTE: Problem-04 : Valid Proposal
function validProposal(person1, person2) {
  if (person1.constructor !== Object || person2.constructor !== Object) {
    return "Invalid";
  }
  let ageDifference = Math.abs(person1.age - person2.age);
  if (person1.gender !== person2.gender && ageDifference <= 7) {
    let isMatched = true;
    return isMatched;
  }
  isMatched = false;
  return isMatched;
}
// let personOne = { name: "bjoy", gender: "male", age: 32 };
// let personTwo = { name: "toya", gender: "female", age: 24 };
//
// let matchMaker = validProposal(personOne, personTwo);
// console.log(matchMaker);
//NOTE: Problem-05 : Total Sleep Time
function calculateSleepTime(times) {
  if (Array.isArray(times) === false) {
    return "Invalid";
  }
  let totalTime = 0;
  for (const time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    } else {
      totalTime = totalTime + time;
    }
  }

  let secToHour = Math.floor(totalTime / 3600);
  let secToMin = Math.floor((totalTime - secToHour * 3600) / 60);
  let secToSec = totalTime - secToHour * 3600 - secToMin * 60;

  timeObj = { hour: secToHour, minute: secToMin, second: secToSec };
  return timeObj;
}
let inputTime = [100, 3800, "90"];
let outputTime = calculateSleepTime(inputTime);
console.log(outputTime);
