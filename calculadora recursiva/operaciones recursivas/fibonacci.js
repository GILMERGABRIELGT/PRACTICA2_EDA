function fibonacciSerie(n) {
    let serie = [];
    for (let i = 0; i < n; i++) {
        serie.push(fibonacci(i));
    }
    return serie;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
