console.log('Hello via Bun!');

import bigInt from 'big-integer';
import { BigNumber } from 'bignumber.js';
import { Decimal } from 'decimal.js';
import { Decimal as DL } from 'decimal.js-light';
import Big from 'big.js';
import BN from 'bn.js'

const a = BigInt(1e12);
const b = 3e11;

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('big.js', () => {
    const r = new Big(a).div(b).toPrecision(3);
    expect(r).toBe('3.33');
  });

  it('bignumber.js', () => {
    const r = BigNumber(a).div(b).toPrecision(3);
    expect(r).toBe('3.33');
  });

  it('decimal.js', () => {
    const r = new Decimal(a.toString()).div(b).toPrecision(3);
    expect(r).toBe('3.33');
  });

  it('decimal.js-light', () => {
    const r = new DL(a.toString()).div(b).toPrecision(3);
    expect(r).toBe('3.33');
  });

  // it('bn.js', () => {
  //   const r = new BN(a.toString()).divn(Number(b)).toString()
  //   expect(r).toBe('3');
  // });

  it('big-integer', () => {
    const r = bigInt(a).divide(b).toString();
    expect(r).toBe('3');
  });

}
