# Primes table implementation

This primes multiples generator takes an argument `n` to determine size of the table (n x n). To run this according to the instructions: `node main.js 10`.

The [sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) requires a populated range of numbers (in this optimized case, all odd numbers greater than three), and because of this, I've set a reasonably high limit to the range. This means that for n = 10, a high limit is very inefficient, but for larger sample sizes, it's incredibly useful for larger sizes. Time complexity for this is currently O(n log log k), k being the top limit of the range.

The calculation of prime multiples is currently O(n^2), n being the prime values calculated from the previous algorithm. products are cached in an JS object in order to prevent duplicate calculations, which ups memory complexity.

A spec is available in the /spec folder! Will need to `npm install -g jasmine` and run `jasmine`
