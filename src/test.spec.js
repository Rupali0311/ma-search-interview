import { expect } from 'chai';

import * as lib from './util';

describe('Utility Library', function() {
  describe('First function', function() {
    it('first test', async function() {
      expect(lib.test()).to.be.true;
    });
  });
});
