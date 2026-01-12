import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nuevoProducto = '';
  productos: string[] = ['Zapatos', 'Camisa', 'Pantalón'];

  agregarProducto() {
    if (this.nuevoProducto.trim() !== '') {
      this.productos.push(this.nuevoProducto);
      this.nuevoProducto = '';
    }
  }

}
