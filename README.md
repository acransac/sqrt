# sqrt
**sqrt** computes common and modular square roots. Pass it a single number and it is Javascript's standard `Math.sqrt`. Use it with two integers _a_ and _p_ (_p_ prime) to compute the integer square roots of _a_ modulo _p_.

Modular square roots can be computed for integers in Javascript's `number` range or for arbitrary-precision `BigInt`s.

# Installation
**sqrt** is a npm package:

```bash
    $ npm install @acransac/sqrt
```

It can be uninstalled with:

```bash
    $ npm uninstall @acransac/sqrt
```

# Usage
```javascript
    import sqrt from '@acransac/sqrt';

    sqrt(25); // 5

    sqrt(123.45); // 11.110805551354051 

    sqrt(3, 11); // [5, 6]

    sqrt(1267650600228227149696889519974n, 1267650600228229401496703205223n); // [403392878153763115700000692025n, 864257722074466285796702513198n]
```

# API
**`sqrt(x[,modulo])`**

* `x` \<number> | \<bigint>
* `modulo` \<number> | \<bigint> **Default:** `undefined`
* Returns: \<number> | \<number[]> | \<bigint[]> | \<NaN>

Compute the common square root if only `x` is provided. The latter should be a `number` and a `number` or `NaN` is returned. It is `Math.sqrt`.

Compute the square root of `x` modulo `modulo` if both arguments are provided. `x` and `modulo` can either be `number`s or `bigint`s but they should be of the same type. `x` should range from 0 to `modulo` included. `modulo` should be at least 2 and prime. The pair of roots is returned in ascending order with the same integer type as the inputs. If there is no root or the computation failed or the inputs are invalid `NaN` is returned. If `modulo` is not prime, `sqrt` either returns `NaN` or hangs.
