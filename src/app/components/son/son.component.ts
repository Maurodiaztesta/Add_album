import { AlbumI } from 'src/app/interface/album.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent {
  @Input() listado!: AlbumI[];
}
