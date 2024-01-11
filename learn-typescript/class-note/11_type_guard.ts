interface Developer {
    name : string;
    skill: string;
}

interface Person {
    name : string;
    age: number;
}

function introduce(): Developer | Person{
    return {name:'tony', age:33, skill:'Iron Making'}
}

var tony = introduce()
var tony2= tony as Developer
console.log(tony2.skill);

function isDev(target: Developer | Person): target  is Developer{
    return (target as Developer).skill !== undefined;
}