import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponent {
  @Input() district: any;
}
