var katzDeliLine = [];

function takeANumber(num, name){
  for (let num=1; num<katzDeliLine.length; num++){
    katzDeliLine.push(`Welcome, ${name}. You are number ${num}in line.`);
  }
  return katzDeliLine;
}
