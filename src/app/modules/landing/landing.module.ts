import { NgModule } from '@angular/core';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DirectiveImgSrcModule } from '../../shared/directive/img-src/directive.module';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    LandingLayoutComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent
  ],
  imports: [
    LandingRoutingModule,
    DirectiveImgSrcModule
  ]
})
export class LandingModule { }
