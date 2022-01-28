import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './shared/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HttpClientModule } from '@angular/common/http';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { DistribuidoresComponent } from './pages/distribuidores/distribuidores.component';
import { TestimonialesComponent } from './pages/testimoniales/testimoniales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    EventosComponent,
    BeneficiosComponent,
    DistribuidoresComponent,
    TestimonialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
