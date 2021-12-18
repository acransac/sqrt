// Copyright (c) Adrien Cransac
// License: MIT

import bigInt from 'big-integer';

/*
 * Modular exponentiation of a base number to the power of the exponent
 * @param {BigInt} base
 * @param {BigInt} exponent
 * @param {BigInt} modulo
 * @return {BigInt}
 */
function pow(base, exponent, modulo) {
  return bigInt(base).modPow(exponent, modulo).value;
}

export default pow;
