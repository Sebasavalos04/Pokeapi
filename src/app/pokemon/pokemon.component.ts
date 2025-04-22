import { routes } from './../app.routes';
import { FormsModule, NgControl } from '@angular/forms';
import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  //Accedemos a los parametros de la url

@Component({
  selector: 'app-pokemon',
  imports: [FormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  name!: string
  img!: string

  constructor (private PokemonService : PokemonService,
               private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const name = params['name'];
    if (name) {
      this.name = name;
      this.search();
    }
  });
}


  search(){
    this.PokemonService.getpokemon(this.name).subscribe((data:any) =>{
      this.img=data.sprites.other['official-artwork'].front_default
    })
  }
}
