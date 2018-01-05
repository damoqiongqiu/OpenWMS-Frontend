import { FieldBase } from './field-base';

export class Datepicker extends FieldBase<Date> {
  controlType = 'datepicker';
  hidden: boolean;
  value: Date;
  constructor(options: {} = {}) {
    super(options);
    this.hidden = options['hidden'] || true;
  }
}
