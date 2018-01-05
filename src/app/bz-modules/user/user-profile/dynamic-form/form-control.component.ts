import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from './form-field'; 

@Component({
    selector: 'form-control',
    templateUrl: 'form-control.component.html',
    styleUrls: ['form-control.component.scss']
})
export class FormControlComponent implements OnInit {
    @Input() field: FieldBase<any>;
    @Input() form: FormGroup;

    private isHidden: boolean = true;

    constructor() { }

    ngOnInit() { }
    showDatepicker(){
      console.log(this.isHidden = !this.isHidden);
    }
    selectionDone(){
        this.isHidden = !this.isHidden
    }
}