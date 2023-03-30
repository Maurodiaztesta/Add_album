import { Component, OnInit } from '@angular/core';
import { AlbumI } from 'src/app/interface/album.interface';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
  listado: AlbumI[] = []

  constructor(){}

  ngOnInit(): void {
    this.listado = [
      {
        name: "Dark side of the moon",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Dark_Side_of_the_Moon_Cover.svg",
        group: "Pink floyd"
      }
    ]
  }

  addAlbum(album:AlbumI){
    this.listado.push(album);
  }
}
