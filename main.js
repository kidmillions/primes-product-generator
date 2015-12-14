
'use strict';

/*
    Primes table implementation

    This primes multiples generator takes an argument `n` to determine size of
    the table (n x n). To run this according to the instructions: `node main.js 10`.

    The sieve of Eratosthenes (https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
    requires a populated range of numbers (in this optimized case, all odd numbers greater than three), and because of this, I've set a reasonably high limit to the range. This means that for n = 10, a high limit is very inefficient, but for larger sample sizes, it's incredibly useful for larger sizes. Time complexity for this is currently
    O(n log log k), k being the top limit of the range.

    The calculation of prime multiples is currently O(n^2), n being the prime values calculated from the previous algorithm. products are cached in an JS object in order to prevent duplicate calculations, which ups memory complexity.

    A spec is available in the /spec folder!

*/


// take argument determining rows / columns of table


(function(n, _) {

    let makeMultiplesMatrix = (primesArray) => {
        //caching products so as to not re-calculate for table
        let products = {};

        let res = _.map(primesArray, (num) => {
            return [num].concat(_.map(primesArray, (otherNum) => {
                if (products.hasOwnProperty(num) && products[num][otherNum]) {
                    return products[num][otherNum];
                } else {
                    if (!products.hasOwnProperty(otherNum)) {
                        products[otherNum] = {};
                    }
                    products[otherNum][num] = num * otherNum;
                    return products[otherNum][num];
                }
            }));
        });

        //add first row of primes with extra [0, 0] cell
        res.unshift(['n'].concat(primesArray));
        return res;
    };

    let printTable = (matrix) => {
        _.forEach(matrix, (row) => {
            console.log('| ' + row.join(' | ') + ' |');
        });
    };

    let findPrimes = (number) => {
        let list = [2];
        let limit = 1000;
        let primes = _.range(3, limit, 2);


        if (number === 1) {
            return list;
        }


        // implementation is (optimized) sieve of Eratosthenes
        let sieve = (primeNum, idx) => {
            if (primeNum !== null) {
                list.push(primeNum);
                if (list.length === number) {
                    return false;
                }
                for (let j = idx; j < limit; j += primeNum) {
                    primes[j] = null;
                }

            }
        };

        _.forEach(primes, sieve);
        return list;
    };

    let list = findPrimes(n);
    printTable(makeMultiplesMatrix(list));


    //exporting main program for specs
    module.exports = {
        printTable: printTable,
        makeMultiplesMatrix: makeMultiplesMatrix,
        findPrimes: findPrimes
    };



})(parseInt(process.argv[2]), require('./lodash'));
