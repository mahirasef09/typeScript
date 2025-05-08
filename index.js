function formatString(input, toUpper) {
    if (toUpper === false) {
        input.toLowerCase;
        return input;
    }
    else {
        input.toUpperCase;
        return input;
    }
}
var result1 = formatString("Hello", false);
console.log(result1);
