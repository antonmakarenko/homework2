import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './widget/menu/menu.component';
import { WeatherComponent } from './widget/weather/weather.component';
import { SocialComponent } from './widget/social/social.component';
import { WidgetComponent } from './widget/widget.component';
import { HeroImageComponent } from './widget/hero-image/hero-image.component';
import { DetailsComponent } from './widget/details/details.component';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from './store';
import {EffectsModule} from '@ngrx/effects';
import { WishlistComponent } from './widget/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    SocialComponent,
    WidgetComponent,
    HeroImageComponent,
    DetailsComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
