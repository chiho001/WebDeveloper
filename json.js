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
    //symbol: Symbol('id'),
    jump: function() { 
        console.log(`${this.name} can jump!`); 
    } 
};
json = JSON.stringify(rabbit);
console.log(json);
rabbit.jump();

json = JSON.stringify(rabbit,["name","color","size"]);
console.log(json);

// callback 함수형
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value : ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
//const obj = JSON.parse(json);
//console.log(obj);
rabbit.jump();
//obj.jump();
// Object가 JSON으로 Serialize할 때 메서드는 데이터가 아님으로
//포함되지 않기 때문에 마찬가지로 Deserialize해도 jump()메서드가
//존재하지 않음
// rabbit의 birthDate.getDate는 Date객체의 API를 사용했지만
// obj의 birthDate.getDate는 Deserialize할 때 그저 String으로
// 변환되었기 때문에. getDate를 사용해도 에러가 발생함!
// 하지만 Deserialize를 할 때 콜백함수에서 세부조정을 함으로써
// obj도 getDate()메서드를 사용할 수가 있게 됨.

//console.log(obj.birthDate.getDate());
obj = JSON.parse(json, (key, value) => key === 'birthDate' ? new Date(value) : value);
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
