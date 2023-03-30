import { Component, Output, EventEmitter } from '@angular/core';
import { AlbumI } from 'src/app/interface/album.interface';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.scss']
})
export class NewAlbumComponent {
  @Output() newAlbum = new EventEmitter();

  sendNewAlbum(album: AlbumI){
    console.log(album);
    
    this.newAlbum.emit(album);
  }
}
