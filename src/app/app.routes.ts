import{RouterModule,Routes} from '@angular/router'

import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { Heroe } from './services/heroes.service';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';




const APP_ROUTES:Routes=[
    {path:'home',component:HomeComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'about',component:AboutComponent},
    {path:'heroe/:id',component:HeroeComponent},
    {path:'buscar/:termino',component:BuscadorComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}
];
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES)