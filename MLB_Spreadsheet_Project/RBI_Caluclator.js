function RBI_Calculator(inputText) {
var textToSearch = inputText.toString(); 
var regexRBI = /(\d*)\s*RBI/g;
var match = regexRBI.exec(textToSearch);
if (match !== null) {
    var xValue = match !== null && match[1] !== "" ? parseInt(match[1]) : 1;
}
else {
  xValue = 0
}
return(xValue)
}