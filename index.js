var katzDeliLine = [];

function takeANumber(number, name){
    katzDeliLine.push(`Welcome, ${name}. You are number ${number + 1} in line.`);
  return katzDeliLine;
}

function currentLine(number, name){
  for (let i = 0; i<katzDeliLine.length; i++){
    katzDeliLine.push(`Welcome, ${name[i]}. You are ${instruments[i]}`);
  }
  return katzDeliLine;
}
