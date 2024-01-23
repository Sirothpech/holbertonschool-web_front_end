function countPrimeNumbers() {
    // Fonction pour vérifier si un nombre est premier
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    let count = 0;
    const start = performance.now();
    // Parcourir les nombres de 2 à 100 et compter les nombres premiers
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    const end = performance.now();
    const executionTime = end - start;

    console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
    return count;
}

countPrimeNumbers();
