import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './widget/menu/menu.component';
import { WeatherComponent } from './widget/weather/weather.component';
import { SocialComponent } from './widget/social/social.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    SocialComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
