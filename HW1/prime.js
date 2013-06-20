#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";

var primes = [];
var integer = 2;

while (primes.length < 100) {
  var found = 0;
  for (i=0; i< primes.length; i++) {
    if (integer % primes[i] == 0){
      found = 1;
      break;
    }
  }
  if (found ==0) {
    primes.push(integer)
  }
  integer++;
} 

var out = "2"

for (i=1; i<primes.length; i++) {
  out +=  "," + primes[i]
}  
console.log(primes);
fs.writeFileSync(outfile, out);
