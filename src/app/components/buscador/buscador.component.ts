import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
 
  termino:string;
  heroes:any[]=[];
  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router:Router) {

   }

   verHeroe(idx:number){
    this.router.navigate(['heroe',idx])
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      //console.log(params['termino'])
      this.termino=params['termino'];
      this.heroes=this.heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes)
    })
    
  }

}
