
let joias = [];

while(true) {
  let input = gets();
    
  if (!input) {      
    break;
  }
  
  let encontra = joias.find(el => el == input);
  
  if (!encontra) {
    joias.push(input);
  }
}

console.log(joias.length);