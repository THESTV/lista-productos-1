import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoCardComponent } from './producto-card/producto-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ProductoCardComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ PLURAL
})
export class AppComponent {
  titulo = 'Lista de productos';
  fecha = new Date();

  mostrar = true;
  nuevoProducto = '';

  productos: string[] = ['Zapatos', 'Camisa', 'Pantalón'];

  agregarProducto() {
    if (this.nuevoProducto.trim()) {
      this.productos.push(this.nuevoProducto);
      this.nuevoProducto = '';
    }
  }

  cambiar() {
    this.mostrar = !this.mostrar;
  }
}
