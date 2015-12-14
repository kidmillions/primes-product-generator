describe('Prime Tables', function() {
    const primeProgram = require('../main.js');



    it('should calculate a list of primes', function() {
        expect(primeProgram.findPrimes(1)).toEqual([2]);
        expect(primeProgram.findPrimes(2)).toEqual([2, 3]);
        expect(primeProgram.findPrimes(5)).toEqual([2, 3, 5, 7, 11]);
        expect(primeProgram.findPrimes(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        expect(primeProgram.findPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]);
    });

    it('should make the appropriate product matrix given a list', function() {
        var matrix = primeProgram.makeMultiplesMatrix([1, 2, 3]);

        expect(matrix.length).toBe(4);
        expect(matrix[0][0]).toMatch('n');
        expect(matrix).toEqual([['n', 1, 2, 3],
                                [1, 1, 2, 3],
                                [2, 2, 4, 6],
                                [3, 3, 6, 9]]);

    });



});
