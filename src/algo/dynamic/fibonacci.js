var findFibonacciDynamic = function () {
    var cache = {};
    return function fiboncacci(n) {
        console.log('Cache ', cache);
        if (n in cache) {
            return cache[n];
        }
        if (n < 2) {
            cache[n] = n;
            return cache[n];
        }
        cache[n] = fiboncacci(n - 1) + fiboncacci(n - 2);
        return cache[n];
    };
};
var fib = findFibonacciDynamic();
console.log(fib(10));
