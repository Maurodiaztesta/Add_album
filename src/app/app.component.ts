import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cards';

  datos= {
    title: "Grand theft auto V",
    price: "70€",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202202/2811/x9SuHZAiRn0uJXB1IKteIgcw.png"
  }

  todo = [
    {
      name: "Aprender JS",
      isDone: true
    },
    {
      name: "Aprender Angular",
      isDone: false
    },
    {
      name: "Aprender React",
      isDone: false
    },
    {
      name: "Aprender HTML",
      isDone: true
    },
  ]
}
