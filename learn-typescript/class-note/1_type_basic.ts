// js
var str = 'hello';

// JS 문자열 선언 - var str1 = 'hello';
//TS 문자열 선언 - let str: string = 'hello'; 
// TS 숫자열 선언 - let num: number = 1; 
// TS 배열 선언
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt','Thor','Hulk',"10"];
let items: number[] = [1,2,3];

let address: [string, number] = ['강남',10];
 
// TS 객체 - 배열의 타입까지 설정
let obj: object = {};
let person: object = {
    name:'이름',
    age:100
}
let person1: {name: string, age: number } = {
    name : '이름',
    age: 1000
}
// TS 진위값
let show: boolean = true;

// 함수의 파라미터에 타입을 정하는 방식
function sum(a: number,b:number){ 
    return a+b
}
// 함수의 반환값에 타입을 정하는 방식
function add():number{
    return 10;
}
// 함수의 타입을 정하는 방식
function total(a: number,b:number):number{
    return 10;
}

function sum1(a:number, b:number, c:number): number {
    return a+b
}
sum(10,20,30,40); // 4번째 변수 체크함.

// 함수 타입 - 옵셔널 파라미터(변수뒤에 ? 추가)
function log(a:string, b?:string) {
}
log('hello world');
//log('hello world', 'abc', 'abc');