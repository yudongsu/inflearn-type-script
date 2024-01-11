interface User {
    age: number;
    name: string;
}

var seho: User = {
    age:33,
    name:"세호"
}

function getUser(user: User){
    console.log(user);
}

const capt = {
    name:'캡틴',
    age:20
}

getUser(capt)

interface SumFunction {
    (a: number, b: number): number
}

var sum:SumFunction;
sum = function(a:number, b:number): number{
    return a+b;
}

interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['1','2','3','4'];
//arr[0]='10';

interface StringRegexDictionary {
    [key: string]: RegExp
}

// var obj:StringRegexDictionary = {
//     //sth: /abc/,
//     cssFile: /\.css$/,
//     jsFile: /\.js$/,
// }

// obj['cssFile'] = 'a.css';

// Object.keys(obj).forEach(function(value){

// })

interface Persion {
    name: string;
    age: number;
}

interface Developer1 extends Persion {
    language: string;
}

var captin: Developer1 = {
    language : 'ts',
    name: '캡틴',
    age: 100
}