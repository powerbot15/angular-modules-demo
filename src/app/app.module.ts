import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HoverEffectsModule } from './modules/hover-effects/hover-effects.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HoverEffectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
