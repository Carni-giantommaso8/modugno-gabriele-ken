import { Component } from '@angular/core';
import { Album } from '../album/album';


@Component({
  selector: 'app-catalogo',
  imports: [Album],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
 names: string[];  
  constructor() { 
     this.names = ['album rock', 'album pop', 'album jazz', 'album phunk',"album non lo so", "album mio", "album rovazzi","album ken","album cinquantacent"]; 
  }
  ngOnInit() {
  }
}
