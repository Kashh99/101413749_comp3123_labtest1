// Kashyap Mavani 
// 101413749

// Arrow function assigned to a constant variable
const lowerCaseWords = (mixedArray) => {
    // Returning a Promise
    return new Promise((resolve, reject) => {
        // Checking if the input is an array
        if (!Array.isArray(mixedArray)) {
            // Rejecting the promise with an error
            reject(new Error("Input is not an array"));
        } else {
            // Filtering strings and converting them to lowercase
            const result = mixedArray
                .filter(item => typeof item === 'string') // Arrow function in filter
                .map(item => item.toLowerCase()); // Arrow function in map
            // Resolving the promise with the result
            resolve(result);
        }
    });
};

// Example usage with a constant array
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
// Handling the resolved promise
lowerCaseWords(mixedArray)
    .then(result => console.log(result)) // Output: ['pizza', 'wings']
    .catch(error => console.error(error)); // Handling errors
