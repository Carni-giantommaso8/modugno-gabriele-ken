import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-album',
  imports: [],
  templateUrl: './album.html',
  styleUrl: './album.css',
})
export class Album  {
  @Input() name!: string;
  ciao: string[];
  constructor() {
    this.ciao = ["Traccia 1", "Traccia 2", "Traccia 3", "Traccia 4", "Traccia 5"];
  }
  ngOnInit() {}
}