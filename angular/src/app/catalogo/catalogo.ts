import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
 @Input() name!: string;

  constructor() {
     
  }

  ngOnInit() {}

}
