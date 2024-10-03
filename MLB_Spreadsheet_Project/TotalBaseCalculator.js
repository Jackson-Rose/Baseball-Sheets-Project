function TBC(inputText) {
var textToSearch = inputText.toString(); 
var total_bases = textToSearch[0];

var regex2B = /(\d*)\s*2B/g;
var match = regex2B.exec(textToSearch);
if (match !== null) {
    var xValue = match !== null && match[1] !== "" ? parseInt(match[1]) : 1;
    var result = 2 * xValue
    total_bases = Number(total_bases) + Number(result); 
    total_bases = total_bases - Number(xValue);
} else {
   
}

var regex3B = /(\d*)\s*3B/g;
match = regex3B.exec(textToSearch);
if (match !== null) {
    var xValue = match !== null && match[1] !== "" ? parseInt(match[1]) : 1;
    var result = 3 * xValue
    total_bases = Number(total_bases) + Number(result); 
    total_bases = total_bases - Number(xValue);
} else {
    
}

var regexHR = /(\d*)\s*HR/g;
match = regexHR.exec(textToSearch);
if (match !== null) {
    var xValue = match !== null && match[1] !== "" ? parseInt(match[1]) : 1;
    var result = 4 * xValue
    total_bases = Number(total_bases) + Number(result); 
    total_bases = total_bases - Number(xValue);
} else {
    
}

return(total_bases);
}
