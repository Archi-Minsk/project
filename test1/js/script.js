" use strict";




// function sumInput() {
//     let a = []
//     while (true) {
//         let values = prompt("введите число")
//         if (values === "" || values === null || !isFinite(values)) break
//         a.push(+values)

//     }
//     let sum = 0
//     for (let value of a) {
//         sum += value
//     }
//     return console.log(sum);
// }

// sumInput()




// let people = [
//     { name: "владилен", age: 25, budget: 40000 },
//     { name: "елена", age: 17, budget: 3400 },
//     { name: "игорь", age: 49, budget: 50000 },
//     { name: "михаил", age: 15, budget: 1800 },
//     { name: "василиса", age: 24, budget: 25000 },
//     { name: "виктория", age: 38, budget: 2300 }
// ];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (let person of people) {
//     console.log(person);
// }


// forEach(цикл)
// people.forEach(person => console.log(person))


// map(преобразуем старый массив в новый)
// let newPeople = people.map(person => person.name)
// console.log(newPeople);


// filter
// let adults = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }

// let adults = people.filter(a => {
//     if (a.age >= 18) {
//         return true
//     }
// })

// let adults = people.filter(person => person.age >= 18)
// console.log(adults);


// reduce

// let sum = 0
// for (let i = 0; i < people.length; i++) {
//     sum += people[i].budget
// }


// let sum = people.reduce((total, person) => {
//     return total + person.budget
// }, 0)

// let sum = people.reduce((total, person) => total + person.budget,0)

// console.log(sum);

// find(по условию найти элемент в масиве)

// let igor = people.find(person => person.name === "игорь")
// console.log(igor);

// findindex (найти по условию и показать его индекс)




// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let userMapped = users.map(person => {
//     return {
//         id: person.id,
//         fullName: `${person.name} ${person.surname}`
//     }
// })

// console.log(userMapped[0].id);
// console.log(userMapped[0].fullName);



// сортировка по age:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1)
// }

// sortByAge(arr);

// console.log(arr);



// из обьекта в map
// let obj = {
//     name: "john",
//     age: 30
// };
// let map = new Map(Object.entries(obj))
// console.log(map);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// }
// let summa = Object.fromEntries(
//     Object.entries(salaries).map(([key, value]) => [key, value * 2])
// )
// console.log(summa.Mary);
// function sumSalaries(obj) {
//     let sum = 0
//     for (let a of Object.values(obj)) {
//         sum += a
//     }
//     return sum

// }
// console.log(sumSalaries(salaries));


// let options = {
//     title: "menu",
//     widht: 100,
//     height: 200
// }

// let { title, widht, height } = options
// console.log(title);


// let user = {
//     name: "artem",
//     years: 34
// }
// let { isAdmin = true, years: age, name } = user
// console.log(name);
// console.log(age);
// console.log(isAdmin);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function topSalary(salaries) {

//     let max = 0;
//     let superMax = null
//     for (const [name, salary] of Object.entries(salaries)) {
//         if (max < salary) {
//             max = salary;
//             superMax = name
//         }
//     }
//     return superMax
// };

let a = "artem";
console.log(a);
function sum(){
  return 2 + 2;
}
console.log(sum());