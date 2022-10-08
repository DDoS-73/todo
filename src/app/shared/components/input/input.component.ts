import { Component, Input, Optional } from '@angular/core';
import { FormGroup, FormGroupDirective, FormGroupName } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  form!: FormGroup;
  constructor(
    private rootFormGroup: FormGroupDirective,
    @Optional() private formGroupName: FormGroupName
  ) {}

  ngOnInit(): void {
    this.form = this.formGroupName ? this.formGroupName.control : this.rootFormGroup.control;
  }

  @Input() label!: string;
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() controlName!: string;
}
