enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

console.log(Direction.Up);

enum Answer {
  Yes ='Y',
  No ='N',
}

function ask(answer: string){
  if(answer === Answer.Yes){
    console.log('정답입니다.');
  }
  
  if(answer === Answer.No){
    console.log('오답입니다.');
  }
}

ask(Answer.Yes);
ask('Y');