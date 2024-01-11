// ES6
function Person(name, age) {
    // 클래스 로직
    this.name = name;
    this.age= age;
}
var seho = new Person('세호', 30);


class Person {
    // 클래스 로직
    constructor(name, age){
        console.log("생성되었습니다.")
        this.name = name;
        this.age= age;
    }
}
var seho = new Person('세호', 30);
