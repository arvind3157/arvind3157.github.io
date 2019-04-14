---
title: Javascript - Data Types
---

Javascript has 3 primitive data types

1. String
2. Number
3. Boolean

Example of each data types given below.

```javascript
let name = "James Bond"; // type: 'string'
let age = 31; // type: 'number'
let married = false; // type: 'boolean'
```

Javascript provides inbuilt method to get the type of the data.

```javascript
let greet = "Hello, there?";
console.log(typeof greet); // prints: String
```

Javascript has few more data types.

- null
- undefined
- object

### null

null is special data type. null is assigned to those variable whose value is currently unknown or empty.

```javascript
let test = null;
```

### undefined

If the variable is not defined explicitly, it's value will be undefined.

```javascript
let city;
console.log(city); // prints: undefined
```

### object

Collection of primitive types can be wrapped in one and such data types are called object.

```javascript
let person = {
  name: "James Bond",
  age: 31,
  married: false,
  city: "Hyderabad"
};
```

<!---

I want you to notice few things when you talk to your friend next time.
Also, notice what kind of data you are dealing with.

You: How old were you when you went for graduation?
Friend: 17
You: What stream did you choose ?
Friend: Electronics and Communications
You: Did you like your stream?
Friend: Yes

So, what kind of

-->
