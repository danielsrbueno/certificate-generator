import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.html',
  styleUrl: './link.css',
})
export class Link {
  @Input() buttonText: string = ""
  @Input() phClass: string = ""
  @Input() href: string = "/"

  constructor (private router: Router, private location: Location) {}

  goToPage () {
    if (this.href === "go back!")
      return this.location.back()

    this.router.navigate([this.href])
  }
}
