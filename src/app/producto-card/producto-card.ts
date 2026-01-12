import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  templateUrl: './producto-card.html',
  styleUrls: ['./producto-card.css']
})
export class ProductoCardComponent {
  @Input() nombre: string = '';
}
