import { Component } from '@angular/core';

@Component({
  selector: 'app-button-contador',
  templateUrl: './button-contador.component.html',
  styleUrls: ['./button-contador.component.scss']
})
export class ButtonContadorComponent {
  contador: number = 0;
  
  sumarUno() {
    this.contador++
  }
  restarUno() {
    this.contador = this.contador - 1
  }
}
