import { Component, Injectable, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})

@Injectable()
export class HomeComponent implements OnInit{

  public ofertas: Array<Oferta>

  constructor(private ofertasService: OfertasService) {

  }

  ngOnInit(){
    
    //this.ofertas = this.ofertasService.getOfertas()
    //console.log(this.ofertas)

    this.ofertasService.getOfertas()
      .then(( ofertas: Oferta[] ) => { 
        this.ofertas = ofertas 
      })
      .catch(
        ( param: any ) => { console.log(param) }      
      )
      
  }

}
