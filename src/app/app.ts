import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  titulo = 'Lista de productos';
  fecha = new Date();

  mostrar = true;

  nuevoProducto = '';
  productos: string[] = ['Zapatos', 'Camisa', 'Pantalón'];

  agregarProducto() {
    if (this.nuevoProducto.trim() !== '') {
      this.productos.push(this.nuevoProducto);
      this.nuevoProducto = '';
    }
  }

  cambiar() {
    this.mostrar = !this.mostrar;
  }

}
