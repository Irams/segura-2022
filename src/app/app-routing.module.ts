import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventosComponent } from './pages/eventos/eventos.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { HomeComponent } from './pages/home/home.component';
import { DistribuidoresComponent } from './pages/distribuidores/distribuidores.component';
import { TestimonialesComponent } from './pages/testimoniales/testimoniales.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'beneficios', component: BeneficiosComponent },
    { path: 'distribuidores', component: DistribuidoresComponent },
    { path: 'testimoniales', component: TestimonialesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
