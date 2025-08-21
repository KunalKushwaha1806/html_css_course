const args = process.argv.slice(2);
const num1=parseFloat(args[0]);
const num2=parseFloat(args[1]);
if (isNaN(num1) || isNaN(num2)) {
    console.log('Invalid input. Please provide two numbers.');
} else {
    const sum=num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}
