// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}

const person1 = {
    firstName: "Mahnoor",
    lastName: "hamad",
    age: 24,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am mahnoor!")},
    read: function(){console.log("I am reading")},
}

console.log(person1.firstName);
person1.sayHello();
person1.read();

const person2 = {
    firstName: "Mahnoor",
    lastName: "hamad",
    age: 24,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am mahnoor!")},
    read: function(){console.log("I am reading")},
}

console.log(person1.firstName);
person2.sayHello();
person2.read();