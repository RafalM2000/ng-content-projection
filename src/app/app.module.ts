import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LusowoComponent } from './feature/lusowo/lusowo.component';

@NgModule({
  declarations: [
    AppComponent,
    LusowoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
