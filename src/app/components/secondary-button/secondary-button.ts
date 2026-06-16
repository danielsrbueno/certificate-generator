import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [],
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.css',
})
export class SecondaryButton {
  @Input() buttonText: string = ""
  @Input() phClass: string = ""
  @Input() disabled: boolean = false
}
