
//create person object
let person = {
    firstName: "Chandler",
    lastName: "Bing",
    age: 34
}

// console.log(person.firstName)
// console.log(person['firstName'])

//create meal object
let meal = {
    appetizer: 'Rolls',
    entree: 'Steak',
    dessert: 'Chocolate Cake',
    drink: 'Dr Pepper'
}

//create variable that pulls out the keys in meal
//const dessert = meal.dessert
const {dessert, appetizer, entree, drink: bestDrinkEver} = meal

//console.log(dessert, appetizer, entree, bestDrinkEver)

// for(let key in meal){
//     console.log(`For my ${key} I had ${meal[key]}.`)
// }

//add a job and pets key to person object
person.job = 'Statistical Analysis and Data Reconfiguration'

person['pets'] = ['Duck', 'Chicken']

//console.log(person)


// delete dessert key from meal object
delete meal.dessert
//console.log(meal)


//create a class called pet
class Pet {
    constructor(name, color){
        this.name = name
        this.color = color
    }
}

//extend the pet class and add a bark method
class Dog extends Pet{
    constructor(name, age, breed){
        super(name, age)
        this.breed = breed

    }
    bark() {
        console.log(`Bark! My name is ${this.name}!`)
    }

}


let kona = new Pet('Kona', 'Black')

let pups = new Dog('Kona', 'Black', 'Bernedoodle')

console.log(pups)

pups.bark()

