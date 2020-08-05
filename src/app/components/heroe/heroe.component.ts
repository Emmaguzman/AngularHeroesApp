import { HeroesService } from './../../services/heroes.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe:any={};
  constructor(private activateRoute:ActivatedRoute,
              private heroeService:HeroesService) { 
    this.activateRoute.params.subscribe(params=>{
         // console.log(params['id'])
         this.heroe=this.heroeService.getHeroe(params['id'])      
         console.log(this.heroe)
    });
  }

 
}
