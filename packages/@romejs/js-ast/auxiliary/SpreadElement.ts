/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {JSNodeBase, AnyExpression} from '../index';
import {createQuickBuilder} from '../utils';

export type SpreadElement = 
  & JSNodeBase
  & {
    type: 'SpreadElement';
    argument: AnyExpression;
  };

export const spreadElement = createQuickBuilder<SpreadElement, 'argument'>(
  'SpreadElement',
  'argument',
  {
    bindingKeys: {},
    visitorKeys: {
      argument: true,
    },
  },
);
