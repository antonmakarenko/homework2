import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './widget/menu/menu.component';
import { WeatherComponent } from './widget/weather/weather.component';
import { SocialComponent } from './widget/social/social.component';
import { WidgetComponent } from './widget/widget.component';
import { HeroImageComponent } from './widget/hero-image/hero-image.component';
import { DetailsComponent } from './widget/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    SocialComponent,
    WidgetComponent,
    HeroImageComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
