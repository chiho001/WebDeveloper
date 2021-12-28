// 1.Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';
//2. Variable
//let (added in ES6)
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
//console.log('Hello World');
//3. Constants
// favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

const bigInt = 12312412125125125125125125125125n;
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number type
const count = 10  // 정수
const size = 10.1 // 소수점
console.log(`value : ${count}, type : ${typeof count}`)
console.log(`value : ${size}, type : ${typeof size}`)

const infinity = 1 / 0  // 무한한값이 나올경우 
const negativeInfinity = -1 / 0 // 음수인 무한한값 
const nAn = 'not a number' / 2 // 숫자가아닌 타입을 나눌경우
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)​

// string type
const char = 'c'
const jungwon = 'jungwon'
const sayHi = 'hi' + jungwon
console.log(`value : ${sayHi}, type : ${typeof sayHi}`)
const sayHello = `hello ${jungwon}`
console.log(`value : ${sayHello}, type : ${typeof sayHello}`)

// Symbol
{
    const symbol1 = Symbol('id')
    const symbol2 = Symbol('id')
    console.log(symbol1 === symbol2)
		const symbol3 = Symbol.keyFor(symbol1)
		console.log(symbol3) // undefined
} // 블록스코프로 나타낸이유는 위아래 선언한변수명이 겹친다고해서
	// 불가피하게 블록스코프로 설정

const symbol1 = Symbol.for('id')
const symbol2 = Symbol.for('id')
console.log(symbol1 === symbol2)
const symbol3 = Symbol.keyFor(symbol1)
console.log(symbol3) // id
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`)

// 다이나믹 타이핑 타입스크립트를 사용하게된 계기랄까
let text = 'hello'
console.log(text.charAt(0))  // h 인덱스의 순서는 항상 0 부터 스트링이니깐 가장앞에꺼
console.log(`value : ${text}, type : ${typeof text}`)
text = 1
console.log(`value : ${text}, type : ${typeof text}`)
text = '7' + 5 // 스트링에 5를 더한다는걸 인지 그냥 스트링 + 스트링으로 바꾸버림
console.log(`value : ${text}, type : ${typeof text}`)
text = '8' / '2'  // 스트링 8에 스트링 2를 나눈다고? 아마 그럼 숫자를 나누겟지 하고 number타입으로 바꿔버림
console.log(`value : ${text}, type : ${typeof text}`)
// console.log(text.charAt(0)) // 중간에 number 타입으로 바뀌엇기에 인덱스 순서를 메길수없음​​