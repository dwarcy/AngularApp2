import { Component, Injectable } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})

@Injectable()
export class DiversaoComponent {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) {

  }

  ngOnInit() {

    this.ofertasService.getOfertasPorCategoria('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })

  }

}
