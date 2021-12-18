// Copyright (c) Adrien Cransac
// License: MIT

import sqrt from '../src/sqrt.js';

describe("Dispatch to standard implementation for covered cases", () => {
  test("Compute the square root of a real number", () => {
    expect(sqrt(123.45)).toBeCloseTo(11.11);
  });

  test("Compute the square root of an integer", () => {
    expect(sqrt(25)).toBe(5);
  });

  test("Fail to compute the square root of a negative number", () => {
    expect(sqrt(-1)).toBeNaN();
  });
});

describe("Compute modular integer square root", () => {
  describe("With Javascript numbers", () => {
    test("Compute the square root of an integer modulo 2", () => {
      expect(sqrt(1, 2)).toEqual([1, 1]);
    });
    
    test("Compute the square root of an integer modulo an odd prime p = 3 mod 4", () => {
      expect(sqrt(3, 11)).toEqual([5, 6]);
    });
    
    test("Compute the square root of an integer modulo an odd prime p = 1 mod 4", () => {
      expect(sqrt(3, 13)).toEqual([4, 9]);
    });
    
    test("Fail to compute the square root of a quadratic non-residue", () => {
      expect(sqrt(2, 3)).toBeNaN();
    });
    
    test("Fail to compute the square root of a negative integer", () => {
      expect(sqrt(-1, 13)).toBeNaN();
    });

    test("Fail to compute the square root of an integer bigger than the modulo", () => {
      expect(sqrt(15, 13)).toBeNaN();
    });

    test("Fail to compute a square root with a modulo strictly lesser than 2", () => {
      expect(sqrt(0, 1)).toBeNaN();
    });

    test("Fail to compute a square root with a non-number modulo", () => {
      expect(sqrt(25, "invalid")).toBeNaN();
    });

    test("Fail to compute a square root with a real modulo", () => {
      expect(sqrt(25, 123.45)).toBeNaN();
    });

    test("Fail to compute the square root of a non-number argument", () => {
      expect(sqrt("invalid", 11)).toBeNaN();
    });

    test("Fail to compute the square root of a real argument", () => {
      expect(sqrt(1.23, 11)).toBeNaN();
    });

    test("Could fail to compute a square root modulo a non-prime", () => {
      expect(sqrt(3, 6)).toBeNaN();
    });
  });

  describe("With small Javascript BigInts", () => {
    test("Compute the square root of an integer modulo 2", () => {
      expect(sqrt(1n, 2n)).toEqual([1n, 1n]);
    });
    
    test("Compute the square root of an integer modulo an odd prime p = 3 mod 4", () => {
      expect(sqrt(3n, 11n)).toEqual([5n, 6n]);
    });
    
    test("Compute the square root of an integer modulo an odd prime p = 1 mod 4", () => {
      expect(sqrt(3n, 13n)).toEqual([4n, 9n]);
    });
    
    test("Fail to compute the square root of a quadratic non-residue", () => {
      expect(sqrt(2n, 3n)).toBeNaN();
    });
    
    test("Fail to compute the square root of a negative integer", () => {
      expect(sqrt(-1n, 13n)).toBeNaN();
    });

    test("Fail to compute the square root of an integer bigger than the modulo", () => {
      expect(sqrt(15n, 13n)).toBeNaN();
    });

    test("Fail to compute a square root with a modulo strictly lesser than 2", () => {
      expect(sqrt(0n, 1n)).toBeNaN();
    });

    test("Could fail to compute a square root modulo a non-prime", () => {
      expect(sqrt(3n, 6n)).toBeNaN();
    });

    test(
      "Fail to compute a square root when the argument and the modulo's integer types don't match",
      () => expect(sqrt(11, 13n)).toBeNaN());
  });

  describe("With Huge Javascript BigInts", () => {
    // Reference for primes: https://primes.utm.edu/lists/2small/0bit.html
    // Reference implementation of the modular square root: https://www.alpertron.com.ar/QUADMOD.HTM

    test("Compute the square root of an integer modulo an odd prime p = 3 mod 4", () => {
      expect(sqrt(1267650600228227149696889519974n, 1267650600228229401496703205223n))
        .toEqual([403392878153763115700000692025n, 864257722074466285796702513198n]);
    });

    test("Compute the square root of an integer modulo an odd prime p = 1 mod 4", () => {
      expect(sqrt(1267650600228227149696889520113n, 1267650600228229401496703205361n))
        .toEqual([144272477200314296042864382774n, 1123378123027915105453838822587n]);
    });
    
    test("Fail to compute the square root of a quadratic non-residue", () => {
      expect(sqrt(1267650600228227149696889519975n, 1267650600228229401496703205223n)).toBeNaN();
    });
    
    test("Fail to compute the square root of an integer bigger than the modulo", () => {
      expect(sqrt(1267650600228229401496703205224n, 1267650600228229401496703205223n)).toBeNaN();
    });

    test("Could fail to compute a square root modulo a non-prime", () => {
      expect(sqrt(1606938044258990275541962092128197301683860452079546883115254n,
                  1606938044258990275541962092128197301683860454331346696800503n))
        .toBeNaN();
    });
  });
});
