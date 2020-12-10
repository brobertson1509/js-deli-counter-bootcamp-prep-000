var katzDeliLine = [];

function takeANumber(number, name){
  for (let i=1; i<katzDeliLine.length; i++){
    katzDeliLine.push(`Welcome, ${name}. You are number ${number}in line.`);
  }  
  return katzDeliLine;
}
