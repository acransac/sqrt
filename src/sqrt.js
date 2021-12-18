// Copyright (c) Adrien Cransac
// License: MIT

import pow from './pow.js';

// # General square root

/*
 * Compute the common square root of a Javascript number or the modular square root of standard and
 * arbitrary-precision integers
 * @param {number | bigint} x - The argument whose square roots are computed. It has to be the same
 *   type as the modulo
 * @param {number | bigint} [modulo] - The modulo for modular square roots. It has to be the same
 *   type as the argument
 * @return {number | [number, number] | bigint | [bigint, bigint] | NaN}
 */
function sqrt(x, modulo) {
  if (modulo === undefined) {
    return Math.sqrt(x);
  }
  else if (typeof x === "number"
             && x >= 0
             && x < modulo
             && Number.isInteger(x)
             && typeof modulo === "number"
             && modulo > 1
             && Number.isInteger(modulo)) {
    return (roots => {
      return Number.isNaN(roots)
        ? roots
        : roots.map(bigInt => Number(bigInt)).sort((a, b) => a - b);
    })(tonelliShanks(BigInt(x), BigInt(modulo)));
  }
  else if (typeof x === "bigint"
             && x >= 0n
             && x < modulo
             && typeof modulo === "bigint"
             && modulo > 1n) {
    return (roots => Number.isNaN(roots) || roots[1] > roots[0] ? roots : [roots[1], roots[0]])
             (tonelliShanks(x, modulo));
  }
  else {
    return NaN;
  }
}

// # Modular integer square root

function tonelliShanks(n, p) {
  const legendreSymbol = (n, p) => {
    return (symbol => symbol === p - 1n ? -1n : symbol)(pow(n, (p - 1n) >> 1n, p));
  };

  const factorBy2 = p => {
    let q = p - 1n;

    let s = 0n;

    while ((q & 1n) === 0n) {
      q >>= 1n;

      s += 1n;
    }

    return [q, s];
  };

  const findQuadraticNonResidue = p => {
    let z = 1n;

    while (legendreSymbol(z, p) !== -1n) {
      z += 1n;
    }

    return z;
  };

  const findRoots = (q, s, z, n) => {
    let m = s;

    let c = pow(z, q, p);

    let t = pow(n, q, p);

    let r = pow(n, (q + 1n) >> 1n, p);

    while (t !== 0n && t !== 1n) {
      let exponent = 2n;

      let i = 1n;

      while (i < m && pow(t, exponent, p) !== 1n) {
        exponent <<= 1n;

        i += 1n;
      }

      const b = pow(c, 2n << (m - i - 2n), p);

      m = i;

      c = (b * b) % p;

      t = (t * c) % p;

      r = (r * b) % p;
    }

    return t === 0n ? [0n, 0n] : [r, p - r];
  };

  if (p === 2n || n === 0n) {
    return [n, n];
  }
  else if (legendreSymbol(n, p) !== 1n) {
    return NaN;
  }
  else if (p % 4n === 3n) {
    return (root => [root, p - root])(pow(n, (p + 1n) >> 2n, p));
  }
  else {
    return findRoots(...factorBy2(p), findQuadraticNonResidue(p), n);
  }
}

export default sqrt;
