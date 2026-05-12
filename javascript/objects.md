### 1. The Anatomy of an Object   

An object is a standalone entity with properties and type.    

Think of it as a container for variables (called properties) and functions (called methods).    
 **Key-Value Pairs:** Every property has a name (key) and a value.    

**Keys**: Must be a String or a Symbol.     

**Values:** Can be anything—strings, numbers, arrays, or even other objects.    



### 2. Accessing Data: The Professional Choice   

**Dot Notation (student.name)**  

**Use case**: The standard way to access properties when you know the name and it has no spaces.    

  **Limitation**: Cannot be used with variables or keys that have spaces.    

**Bracket Notation (student["total rooms"])**   

**Use case:** Mandatory for keys with spaces or special characters.    

**Dynamic Access:** Essential when the key name is stored in a variable (e.g., student[mySym]).    




### 3.Advanced Concepts
The 'this' KeywordInside an object method, this refers to the object itself. It allows your functions to be "aware" of the data surrounding them.     

 **Teacher's Note**: Avoid using Arrow Functions (=>) for methods if you need to use this, as they don't bind their own this context.      

 ### 4. Object Immutability (Security)    
 **Object.freeze(obj):** The "Maximum Security" option. No one can add, delete, or change anything.     
**Object.seal(obj):** You can change existing values, but you cannot add or remove keys.    


### interview questions
**Q: What is the difference between Dot notation and Bracket notation?**    

**answer:**Dot notation (obj.key) is used when you know the property name and it is a valid identifier (no spaces). Bracket notation (obj["key"]) is mandatory if the key has spaces, special characters, or if the key name is stored in a variable.    

**Q: How do you check if a property exists in an object?**    

You can use the in operator (e.g., "name" in user) or the .hasOwnProperty() method.    

**Q: What are "Computed Properties"?**    

It is a feature that allows you to use a variable as an object key during the object's declaration by wrapping the variable in square brackets []    

## 2. Intermediate Level: Logic & Methods    

**Q: What is the difference between Object.freeze() and Object.seal()?**    

Object.freeze() makes an object completely immutable—you cannot add, delete, or change properties. Object.seal() prevents adding or deleting properties, but you can still modify the values of existing properties.     

**Q: What is the purpose of the this keyword in an object method?**    

this refers to the "owner" of the function—the object that is currently executing the code. It allows methods to access other properties within the same object.    

**Q: How do you merge two objects?**    

You can use the Spread Operator ({...obj1, ...obj2}) or Object.assign(target, source). The spread operator is generally preferred in modern development for its readability.   

## 3. Senior Level: Memory & Patterns     

**Explain "Pass by Value" vs. "Pass by Reference" in relation to objects**    

Primitive types (strings, numbers) are passed by value. Objects are passed by reference, meaning if you assign objA = objB, both variables point to the same spot in memory. Changing a property in objA will reflect in objB.    

**What are Symbols and why would you use them as object keys**    

Symbols are unique primitive values. They are used as keys to create "anonymous" properties that won't collide with other string keys and are hidden from standard loops like for...in   

 
**What is Object Destructuring**   

It is a syntax that allows you to "unpack" properties from an object into distinct variables. For example: const { name, email } = user;. This is heavily used in React and Node.js for cleaner code
**


