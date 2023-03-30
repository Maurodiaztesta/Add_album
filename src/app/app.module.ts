import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TitleComponent } from './title/title.component';
import { ImageComponent } from './image/image.component';
import { PriceComponent } from './price/price.component';
import { ButtonContadorComponent } from './button-contador/button-contador.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';
import { NewAlbumComponent } from './components/new-album/new-album.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TitleComponent,
    ImageComponent,
    PriceComponent,
    ButtonContadorComponent,
    TodoListComponent,
    FatherComponent,
    SonComponent,
    NewAlbumComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
