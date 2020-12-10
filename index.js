var katzDeliLine = []
var name = [];
var number = [];

function takeANumber(number, name){
  for (let i = 0, i<katzDeliLine.length, i++){
    katzDeliLine.push(`Welcome, ${name[i]}. You are ${instruments[i]}`);
  }
  return katzDeliLine;
}
