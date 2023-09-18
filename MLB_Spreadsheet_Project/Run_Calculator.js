function Run_Calculator(inputText) {
var textToSearch = inputText.toString();
var regexRuns = /, R(?!B)|(\d+)\s*R(?!B)/;
var match = regexRuns.exec(textToSearch);

if (match !== null) {
    if (match[1] !== undefined) {
        var xValue = match[1] !== '' ? parseInt(match[1]) : 1;
    }
    else {
        xValue = 1;
    }
} else {
    xValue = 0;
}
return(xValue)
}