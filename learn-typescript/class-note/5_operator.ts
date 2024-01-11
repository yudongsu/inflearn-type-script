// function logMess(value: any){
//     console.log(value);
// }

// logMess('100');
// logMess(100)

// function logMess(value: string | number){
//     console.log(value);
// }

// logMess('100');
// logMess(100)

interface Developer{
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age : number;
}

// Union Type(|) 교집합 (A 이거나 B)
function askSomeoneUnion(someone: Developer | Person){
    someone.name;   // (O) 
    //someone.skill;  // (X)
}

// Intersection  Type(&) 교집합 (A 또는 B)
function askSomeoneIntersection (someone: Developer & Person){
    someone.name;   // (O)
    someone.skill;  // (O)
}
