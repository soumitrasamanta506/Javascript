// Immediately Invoked Function Expressions (IIFE) or Self-Executing Anonymous Function

(function connect(){
    // named IIFE
    console.log(`DB CONNECTED!`);
})();

((name) => {
    console.log(`Welcome, ${name}`);
})('soumitra');

// The function is wrapped  in () to create function expression and then immediately invoked with another set of ().
// This pattern is useful for private scope for variables, to avoid polluting the global scope, and to execute code as soon as it's defined