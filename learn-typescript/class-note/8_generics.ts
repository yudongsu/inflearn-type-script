// function getText(text) {
//   return text;
// }

// getText('hi'); // 'hi'
// getText(10); // 10
// getText(true); // true

function getText<T>(text: T): T {
  return text;
}

getText<string>('hi');
getText<number>(10);
getText<boolean>(true);


class GenericMath<T> {
  pi: T;
  sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>();


function logText<T>(text: T): T{
    return text;
}