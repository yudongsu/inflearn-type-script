class PersonClass {
    // 클래스 로직
    private name: string;
    private age: number;
    readonly log: string;

    constructor(name: string, age: number){
        console.log("생성되었습니다.")
        this.name = name;
        this.age= age;
    }
}
var seho = new Person('세호', 30);