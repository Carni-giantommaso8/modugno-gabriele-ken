import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.html',
  styleUrls: ['./album.css'],
})
export class Album  {
  @Input() name!: string;
  ciao: string[];
  constructor() {
    this.ciao = ["Traccia 1", "Traccia 2", "Traccia 3", "Traccia 4", "Traccia 5"];
  }
  ngOnInit() {}
}