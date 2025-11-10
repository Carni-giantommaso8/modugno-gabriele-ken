import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Album } from './album/album';
import { Catalogo } from './catalogo/catalogo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Album,Catalogo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}
