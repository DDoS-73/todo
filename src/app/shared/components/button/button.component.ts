import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {
  @Input() btnDisabled?: boolean;
  @Input() styles?: Record<string, string | undefined | null>

}
