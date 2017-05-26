/**
 * Created by Meathill on 2017/5/26.
 */

const should = require('should');
import EasyDate from '../app/EasyDate';

describe('EasyDate', () => {
  let date = new EasyDate('+1m');

  describe('#new', () => {
    it('should create instance', () => {
      let some = date.toDate();
      let today = new Date();
      should(some.getFullYear()).aboveOrEqual(today.getFullYear());
      should(some.getFullYear() - today.getFullYear()).belowOrEqual(1);
      if (today.getMonth() === 11) {
        should(some.getMonth()).equal(0);
      } else {
        should(some.getMonth() - today.getMonth()).equal(1);
      }
    });
  });

});