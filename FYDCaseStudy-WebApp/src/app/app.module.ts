import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './title/title.component';
import { TitledParagraphComponent } from './titled-paragraph/titled-paragraph.component';
import { PersonaCardComponent } from './persona-card/persona-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TitledParagraphComponent,
    PersonaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
