// Kashyap Mavani 
// 101413749

// Function that returns a promise resolved after 500ms
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved promise message'); // Resolve with message
        }, 500); // 500ms delay
    });
};

// Function that returns a promise rejected after 500ms
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('rejected promise error'); // Reject with error message
        }, 500); // 500ms delay
    });
};

// Handling the resolved promise
resolvedPromise()
    .then(message => console.log(message)) // Log resolved message
    .catch(error => console.error(error)); // Log error if any

// Handling the rejected promise
rejectedPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error)); // Log rejected error
