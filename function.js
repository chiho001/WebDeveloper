//# Function

//- 프로그램의 기본 구성 요소.
//- 서브 프로그램(=== function)은 여러 번 사용할 수 있습니다.
//- 작업을 수행하거나 값을 계산합니다.

//## 1. Function declaration (함수 선언)
//
//- 기본 형태: function name(param1, param2) { body... return; }
//- 하나의 function에는 하나의 기능만
//- 네이밍:  명령어, 동사 형태
//- e.g. createCardAndPoint → createCard, createPoint

//- function is object in JS (JS에서 function은 객체임)


// JS
"use strict";
function log(msg) {
    console.log(msg);
    return 0;
}

log(`Hello`);

/*
// TS
function log(msg: string): number {
    console.log(msg);
    return 0;
}
// TS는 파라미터의 타입과 리턴의 타입을 명시하므로써 대규모 PJ에서 아주 효율적임
*/

//## 2. Parameters (매개 변수)

//- primitive parameters: passed by value (값으로 전달)
//- object parameters: passed by reference (참조로 전달)

function changeName(obj) {
	obj.name = `coder`;
}
const ellie = { name: `ellie` };
changeName(ellie);
console.log(ellie); // > {name: "coder"}

//## 3. Default parameters

//- added in ES6
function showMessage(msg, from = `unknown`) {
  console.log(`${msg} by ${from}`);
}
showMessage(`Hi!!`);

//💡 파라미터의 기본값을 지정해 줌.

//## 4. Rest parameters 
//- added in ES6

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]); // > dream, coding, ellie, good : 순서대로 출력됨.
  }

  // for (const arg of args) {
  //   console.log(arg);
  // }

  // args.forEach((arg) => console.log(arg));
}
printAll(`dream`, `coding`, `ellie`, `good`);
//배열 인자를 받을 때 유용함!!

//## 5. Local scope

let globalMessage = `global`; // global 변수
function printMessage() {
  let message = `hello`; // local 변수
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = `hello`;
  }
  // console.log(childMessage); // > error : Uncaught ReferenceError: childMessage is not defined
}
printMessage();

//이렇게 중첩된 함수에서, 자식의 함수가 부모 함수에 정의된 변수에 접근이 가능한 것들을 클로저 라고 함.

//## 6. Return a value

function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // > 3
console.log(result)

//function에 return이 없으면, 알아서 undefined을 return 함.

//## 7. Early return, early exit (조기 리턴, 조기 종료)

// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic ...
  } else {
    return;
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic ...
}
//function 내부에서는 조건이 틀릴때, 리턴(종료) 하게 코드를 짜는게 가독성에 좋음.

/*------------------------------------------------------------------------*/
// # First-class function

//- function이 변수처럼 취급됩니다.
//- 변수에 값으로 할당 가능
//- 다른 function에 인수로 전달 가능
//- 다른 function에 의해 반환 가능

//## 1. Function expression (함수 표현)

//- 함수 선언은 정의 된 것보다 더 일찍 호출 될 수 있습니다. (호이스팅됨)
//- 함수 표현식은 실행이 도달하면 생성됩니다. (정상적)


//print(); // > error : 당연히 선언 전에 호출하니 error 발생!
const print = function () { // 함수를 변수에 할당
	// 익명 function
  console.log(`print`);
};
print(); // > print
const print2 = print; // print2 변수는 print 변수와 같은 메모리 주소의 function을 바라보고 있음
print2(); // > print

// console.log(sum(1, 3)); // > 4 : 함수 호이스팅되서 error 발생 안함.
function sum(a, b) { // 함수 선언식
  return a + b;
}
const sum2 = sum; // 선언한 함수도 변수에 할당 쌉가능
console.log(sum2(1, 3)); // > 4


// ## 2. 함수 표현식을 사용한 Callback function


function randomQuiz(answer, printYes, printNo) {
  if (answer === `love you`) {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log(`yes!`);
};

// named function
// 스택 추적 디버깅 할 때 더 나은 방법
// 재귀
const printNo = function print() {
  console.log(`no!`);
  // print(); // 재귀
};

randomQuiz(`wrong`, printYes, printNo);
randomQuiz(`love you`, printYes, printNo);


//## 3. Arrow(화살표) function

//##- 항상 anonymous(익명)
//##- 함수를 간결하게 만들어 줌
//##- 함수형 프로그레밍인 배열/리스트 에 빛을 발휘 함


const simplePrint = () => console.log(`simple~!!`);
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
	// do something more
	return a * b;
};


//## 4. IIFE (Immediately Invoked Function Expression)

//- 즉시 호출 된 함수 표현식
//- 요즘엔 사용 잘 안함 ㅋㅋ


(function hello() {
	console.log(`IIFE`);
})(); // 즉시 호출 됨!!


//## Fun Quiz time

//- function calculate(command, a, b)
//- command: add, subtract, divide, multiply, remainder


const calculate = (command, a, b) => {
  let result = null;
  switch (command) {
    case `add` :
      result = a + b;
      break;
    case `subtract` :
      result = a - b;
      break;
    case `divide` :
      result = a / b;
      break;
    case `multiply` :
      result = a * b;
      break;
    case `remainder` :
      result = a % b;
      break;
    default:
      throw Error('잘못된 명렁!');
  }
  return result
};
console.log(calculate(`add`, 5, 2)); // > 7
console.log(calculate(`subtract`, 5, 2)); // > 3
console.log(calculate(`divide`, 5, 2)); // > 2.5
console.log(calculate(`multiply`, 5, 2)); // > 10
console.log(calculate(`remainder`, 5, 2)); // > 1
//console.log(calculate(`good`, 5, 2)); // > error : 잘못된 명령!
