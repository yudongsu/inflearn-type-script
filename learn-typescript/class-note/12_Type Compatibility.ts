interface Avengers {
  name: string;
  skill: string
}

class Person {
  name: string;
}


var avengers: Avengers;
var person: Person;

avengers = new person();



// let hero: Avengers;
// // 타입스크립트가 추론한 y의 타입은 { name: string; location: string; } 입니다.
// let capt = { name: "Captain", location: "Pangyo" };
// capt = hero;

interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // OK, because y matches structure of x