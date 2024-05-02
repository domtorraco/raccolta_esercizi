/* Write a loop that asks the user for a number greater than 100.
If the user enters a number that is less than or equal to 100,
ask them to enter a new number. The loop should continue asking
for a number until the visitor enters a number greater than 100 or cancels
the input by entering an empty line.

Variant: If the user enters something that is not a number, display an error message.*/

let n = prompt("Enter a number greater than 100");
while(n > 100) {
    if (n >= 100 || n.typeof === numbers) {
        alert("Please enter a number greater than 100");
    }
}