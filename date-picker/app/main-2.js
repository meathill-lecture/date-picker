/**
 * Created by Meathill on 2017/5/26.
 */

import Factory from './Factory';

$('body').on('click', '.tqb-date-picker-input', event => {
  let target = $(event.currentTarget);
  let options = target.data();
  let picker = options.tqbDatePicker;
  if (picker) {
    return picker.show();
  }

  picker = Factory.createDatePicker(target, options);
  target.data('tqb-date-picker', picker);
});