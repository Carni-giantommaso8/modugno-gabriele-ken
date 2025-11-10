import { Component } from '@angular/core';
import { Catalogo } from '../catalogo/catalogo';

@Component({
  selector: 'app-album',
  imports: [Catalogo],
  templateUrl: './album.html',
  styleUrl: './album.css',
})
export class album {
 names: string[];  
  constructor() { 
     this.names = ['album rock', 'album pop', 'album jazz', 'album phunk',"album non lo so", "album mio", "album rovazzi","album ken","album cinquantacent"]; 
  }
  ngOnInit() {
  }
}