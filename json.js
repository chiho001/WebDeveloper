// JSON
// JavaScript Object Notation

// 1. Object to json
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = { 
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol('id'),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit,["name","color","size"]);
console.log(json);

json = JSON.stringify(rabbit,(key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)