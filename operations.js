// slowMath.add(6, 2)
// .then(result => {
//     console.log("Addition:", result);
//     return slowMath.multiply(result, 2);
// })
// .then(result => {
//     console.log("Multiplication:", result);
//     return slowMath.divide(result, 4);
// })
// .then(result => {
//     console.log("Division:", result);
//     return slowMath.subtract(result, 3);
// })
// .then(result => {
//     console.log("Subtraction:", result);
//     return slowMath.add(result, 98);
// })
// .then(result => {
//     console.log("Addition:", result);
//     return slowMath.remainder(result, 2);
// })
// .then(result => {
//     console.log("Remainder:", result);
//     return slowMath.multiply(result, 50);
// })
// .then(result => {
//     console.log("Multiplication:", result);
//     return slowMath.remainder(result, 40);
// })
// .then(result => {
//     console.log("Remainder:", result);
//     return slowMath.add(result, 32);
// })
// .then(result => {
//     console.log(`The final result is ${result}`);
// })
// .catch(error => {
//     console.error("Error:", error.message);
// });

// Comment out the previous code
/* 
... Your previous promise chain code ...
*/

// New async function
async function doMath() {
    try {
        let result = await slowMath.add(1, 1);
        console.log("Addition:", result);

        result = await slowMath.multiply(result, 2);
        console.log("Multiplication:", result);

        result = await slowMath.divide(result, 4);
        console.log("Division:", result);

        result = await slowMath.subtract(result, 3);
        console.log("Subtraction:", result);

        result = await slowMath.add(result, 98);
        console.log("Addition:", result);

        result = await slowMath.remainder(result, 2);
        console.log("Remainder:", result);

        result = await slowMath.multiply(result, 50);
        console.log("Multiplication:", result);

        result = await slowMath.remainder(result, 40);
        console.log("Remainder:", result);

        result = await slowMath.add(result, 32);
        console.log(`The final result is ${result}`);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

doMath(); // Invoke the asynchronous function
