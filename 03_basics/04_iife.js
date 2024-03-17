// Immediately Invoked Function Expressions (IIFE) or Self-Executing Anonymous Function

(function connect(){
    // named IIFE
    console.log(`DB CONNECTED!`);
})();

((name) => {
    console.log(`Welcome, ${name}`);
})('soumitra');
