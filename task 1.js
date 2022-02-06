function showObject(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(
        `ключ ${key} в  этом обьекте  имеет значение ${object[key]} и является родным свойством `
      );
    }
  }
}
let valera = {
  name: "Valera",
  age: 22,
  problems: "none",
};
let valeraPoker = Object.create(valera);
valeraPoker.work = "Poker";
showObject(valeraPoker);
