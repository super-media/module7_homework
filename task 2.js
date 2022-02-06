function checkKeyinObj(object, string) {
  for (key in object) {
    if (key === string) {
      return true;
    }
  }
  return false;
}
let currentValera = {
  name: "Valera",
  age: 25,
  work: "Poker",
};
let checkResult = checkKeyinObj(currentValera, "work");
console.log(checkResult);
