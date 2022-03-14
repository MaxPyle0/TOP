function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalise(strIn) {
    return strIn.charAt(0).toUpperCase() + strIn.slice(1).toLowerCase();
}

function lastLetter(strIn) {
    return strIn.charAt(strIn.length - 1);
}

console.log("Add 7 to 3: " + add7(3));
console.log("Multiply 3 and 14: ") + multiply(3,14);
console.log("Capitalise iDk dOE: " + capitalise("iDk dOE"));
console.log("Find last letter of aknsdpnapnasb: " + lastLetter("aknsdpnapnasb"));
