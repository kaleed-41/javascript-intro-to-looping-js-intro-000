function forLoop(array){
  for(let i = 0; array[i] < 25; i++){
    if(array[i] === 1){
      console.log("I am 1 strange loop");
    }else{
      console.log(`I am ${i} strange loops`);
    }
  }
}
