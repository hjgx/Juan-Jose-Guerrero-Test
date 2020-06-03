//Autor Juan Jose Guerrero

function factorial(x){ 
  if (x === 0){
    return 1;
  }
  return x * factorial(x-1);       
}

function factorialfor(x){
    let total=0;
    for (let j = x; j >=0; j--) {
        console.log(j + "! ="+factorial(j));
    }
}

function test2(num){
    console.log(factorial(num));
}

function test(num){
    console.log(factorialfor(num));
}