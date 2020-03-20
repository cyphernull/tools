/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '@romejs/string-markup';
import {satisfiesSemver} from '@romejs/codec-semver';
import test from '@romejs/test';

const looseOnly: Array<[string, string]> = [
  ['||', '1.3.4'],
  ['', '1.0.0'],
  ['1.2.3pre+asdf - 2.4.3-pre+asdf', '1.2.3'],
  ['1.2.3-pre+asdf - 2.4.3pre+asdf', '1.2.3'],
  ['1.2.3pre+asdf - 2.4.3pre+asdf', '1.2.3'],
  ['x - 1.0.0', '0.9.7'],
  ['x - 1.x', '0.9.7'],
  ['1.0.0 - x', '1.9.7'],
  ['1.x - x', '1.9.7'],
  ['>=0.1.97', 'v0.1.97'],
  ['~v0.5.4-pre', '0.5.5'],
  ['~v0.5.4-pre', '0.5.4'],
];

type TestDataItems = Array<[string, string, boolean] | [string, string]>;

const testData: {
  pass: TestDataItems;
  fail: TestDataItems;
} = {
  pass: [
    ...(looseOnly.map(([range, version]) => 
      [
        range,
        version,
        true,
      ]
    ) as TestDataItems),
    ['1.0.0 - 2.0.0', '1.2.3'],
    ['^1.2.3+build', '1.2.3'],
    ['^1.2.3+build', '1.3.0'],
    ['1.2.3-pre+asdf - 2.4.3-pre+asdf', '1.2.3'],
    ['1.2.3-pre+asdf - 2.4.3-pre+asdf', '1.2.3-pre.2'],
    ['1.2.3-pre+asdf - 2.4.3-pre+asdf', '2.4.3-alpha'],
    ['1.2.3+asdf - 2.4.3+asdf', '1.2.3'],
    ['1.0.0', '1.0.0'],
    ['>=*', '0.2.4'],
    ['>1.0.0', '1.1.0'],
    ['<=2.0.0', '2.0.0'],
    ['<=2.0.0', '1.9999.9999'],
    ['<=2.0.0', '0.2.9'],
    ['<2.0.0', '1.9999.9999'],
    ['<2.0.0', '0.2.9'],
    ['>= 1.0.0', '1.0.0'],
    ['>=  1.0.0', '1.0.1'],
    ['>=   1.0.0', '1.1.0'],
    ['> 1.0.0', '1.0.1'],
    ['>  1.0.0', '1.1.0'],
    ['<=   2.0.0', '2.0.0'],
    ['<= 2.0.0', '1.9999.9999'],
    ['<=  2.0.0', '0.2.9'],
    ['<    2.0.0', '1.9999.9999'],
    ['<\t2.0.0', '0.2.9'],
    ['>=0.1.97', '0.1.97'],
    ['0.1.20 || 1.2.4', '1.2.4'],
    ['>=0.2.3 || <0.0.1', '0.0.0'],
    ['>=0.2.3 || <0.0.1', '0.2.3'],
    ['>=0.2.3 || <0.0.1', '0.2.4'],
    ['2.x.x', '2.1.3'],
    ['1.2.x', '1.2.3'],
    ['1.2.x || 2.x', '2.1.3'],
    ['1.2.x || 2.x', '1.2.3'],
    ['x', '1.2.3'],
    ['2.*.*', '2.1.3'],
    ['1.2.*', '1.2.3'],
    ['1.2.* || 2.*', '2.1.3'],
    ['1.2.* || 2.*', '1.2.3'],
    ['*', '1.2.3'],
    ['2', '2.1.2'],
    ['2.3', '2.3.1'],
    ['~x', '0.0.9'], // >=2.4.0 <2.5.0
    ['~2', '2.0.9'], // >=2.0.0 <2.1.0
    ['~2.4', '2.4.0'], // >=2.4.0 <2.5.0
    ['~2.4', '2.4.5'],
    ['~>3.2.1', '3.2.2'], // >=3.2.1 <3.3.0,
    ['~1', '1.2.3'], // >=1.0.0 <2.0.0
    ['~>1', '1.2.3'],
    ['~> 1', '1.2.3'],
    ['~1.0', '1.0.2'], // >=1.0.0 <1.1.0,
    ['~ 1.0', '1.0.2'],
    ['~ 1.0.3', '1.0.12'],
    ['~0.2', '0.2.3'],
    ['~0', '0.2.3'],
    ['~*.*.*', '0.2.3'],
    ['>=1', '1.0.0'],
    ['>= 1', '1.0.0'],
    ['<1.2', '1.1.1'],
    ['< 1.2', '1.1.1'],
    ['=0.7.x', '0.7.2'],
    ['<=0.7.x', '0.7.2'],
    ['>=0.7.x', '0.7.2'],
    ['<=0.7.x', '0.6.2'],
    ['~1.2.1 >=1.2.3', '1.2.3'],
    ['~1.2.1 =1.2.3', '1.2.3'],
    ['~1.2.1 1.2.3', '1.2.3'],
    ['~1.2.1 >=1.2.3 1.2.3', '1.2.3'],
    ['~1.2.1 1.2.3 >=1.2.3', '1.2.3'],
    ['~1.2.1 1.2.3', '1.2.3'],
    ['>=1.2.1 1.2.3', '1.2.3'],
    ['1.2.3 >=1.2.1', '1.2.3'],
    ['>=1.2.3 >=1.2.1', '1.2.3'],
    ['>=1.2.1 >=1.2.3', '1.2.3'],
    ['>=1.2', '1.2.8'],
    ['^1.2.3', '1.8.1'],
    ['^0.1.2', '0.1.2'],
    ['^0.1', '0.1.2'],
    ['^0.0.1', '0.0.1'],
    ['^1.2', '1.4.2'],
    ['^1.2 ^1', '1.4.2'],
    ['^1.2.3-alpha', '1.2.3-pre'],
    ['^1.2.0-alpha', '1.2.0-pre'],
    ['^0.0.1-alpha', '0.0.1-beta'],
    ['^0.1.1-alpha', '0.1.1-beta'],
    ['^x', '1.2.3'],
    ['<=7.x', '7.9.9'],
  ],

  fail: [
    ...looseOnly,
    ['1.0.0 - 2.0.0', '2.2.3'],
    ['^1.2.3+build', '2.0.0'],
    ['^1.2.3+build', '1.2.0'],
    ['^1.2.3', '1.2.3-pre'],
    ['1.2.3+asdf - 2.4.3+asdf', '1.2.3-pre.2'],
    ['1.2.3+asdf - 2.4.3+asdf', '2.4.3-alpha'],
    ['^1.2', '1.2.0-pre'],
    ['>1.2', '1.3.0-beta'],
    ['<=1.2.3', '1.2.3-beta'],
    ['^1.2.3', '1.2.3-beta'],
    ['=0.7.x', '0.7.0-asdf'],
    ['>=0.7.x', '0.7.0-asdf'],
    ['<1.2.3', '1.2.3-beta'],
    ['^1.2.3', '2.0.0-alpha'],
    ['^1.2.3', '2.0.0-pre'],
    ['1', '1.0.0beta', true],
    ['<1', '1.0.0beta', true],
    ['< 1', '1.0.0beta', true],
    ['>=0.1.97', 'v0.1.93', true],
    ['1', '2.0.0beta', true],
    ['~v0.5.4-beta', '0.5.4-alpha', true],
    ['*', 'v1.2.3-foo', true],
    ['<1', '1.0.0'],
    ['<0.7.x', '0.7.2'],
    ['1.0.0', '1.0.1'],
    ['>=1.0.0', '0.0.0'],
    ['>=1.0.0', '0.0.1'],
    ['>=1.0.0', '0.1.0'],
    ['>1.0.0', '0.0.1'],
    ['>1.0.0', '0.1.0'],
    ['<=2.0.0', '3.0.0'],
    ['<=2.0.0', '2.9999.9999'],
    ['<=2.0.0', '2.2.9'],
    ['<2.0.0', '2.9999.9999'],
    ['<2.0.0', '2.2.9'],
    ['>=0.1.97', '0.1.93'],
    ['0.1.20 || 1.2.4', '1.2.3'],
    ['>=0.2.3 || <0.0.1', '0.0.3'],
    ['>=0.2.3 || <0.0.1', '0.2.2'],
    ['2.x.x', '3.1.3'],
    ['1.2.x', '1.3.3'],
    ['1.2.x || 2.x', '3.1.3'],
    ['1.2.x || 2.x', '1.1.3'],
    ['2.*.*', '1.1.3'],
    ['2.*.*', '3.1.3'],
    ['1.2.*', '1.3.3'],
    ['1.2.* || 2.*', '3.1.3'],
    ['1.2.* || 2.*', '1.1.3'],
    ['2', '1.1.2'],
    ['2.3', '2.4.1'],
    ['~2.4', '2.5.0'], // >=2.4.0 <2.5.0
    ['~2.4', '2.3.9'],
    ['~>3.2.1', '3.3.2'], // >=3.2.1 <3.3.0
    ['~>3.2.1', '3.2.0'], // >=3.2.1 <3.3.0
    ['~1', '0.2.3'], // >=1.0.0 <2.0.0
    ['~>1', '2.2.3'],
    ['~1.0', '1.1.0'], // >=1.0.0 <1.1.0
    ['~0.2', '0.3.3'],
    ['~0', '1.2.3'],
    ['>=1.2', '1.1.1'],
    ['=0.7.x', '0.8.2'],
    ['>=0.7.x', '0.6.2'],
    ['=1.2.3', '1.2.3-beta'],
    ['>1.2', '1.2.8'],
    ['^0.0.1', '0.0.2'],
    ['^1.2.3', '1.2.2'],
    ['^1.2', '1.1.9'],

    // invalid ranges never satisfied!
    ['blerg', '1.2.3'],
    ['git+https://user:password0123@github.com/foo', '123.0.0'],
  ],
};

test('satisfies pass', function(t) {
  for (const [range, ver, loose] of testData.pass) {
    t.true(
      satisfiesSemver(ver, range, {loose: loose === true}),
      `${range} should be satisfied by ${ver}`,
    );
  }
});

test('satisfies fail', function(t) {
  for (const [range, ver, loose] of testData.fail) {
    const found = satisfiesSemver(ver, range, {loose: loose === true});
    t.false(found, `${ver} should not be satisfied by ${range}`);
  }
});
