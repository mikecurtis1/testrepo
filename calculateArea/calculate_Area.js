let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let grocery1;
let grocery2;
let grocery3;

function groceryTracker() {
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);
    let total = grocery1 + grocery2 + grocery3;
    //(Math.round(num * 100) / 100).toFixed(2);
    total = (Math.round(total * 100) / 100).toFixed(2);
    document.getElementById('groceryCalculation').innerText = `The total amount is: \$${total}`;
}