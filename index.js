var katzDeliLine = [];
function takeANumber(line) {
 line.push(line.length + 1);
  
  return `Welcome, You are number ${line.length} in line.`;
 
}
function nowServing(line){
  
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
 
 return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(array) {
  if (array.length > 0){
    var i;
    let posName = [];
  for (let i = 0; i < array.length; i++){
    posName.push(" " + (i + 1) + ". " + array[i]);
    
  }
      return ("The line is currently:" + posName.join());
  }    
   else { 
     return ("The line is currently empty.");
  }
}