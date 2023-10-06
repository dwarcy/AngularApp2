import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent {

  public oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {

  }

  ngOnInit() {

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta:  Oferta) => {
        this.oferta = oferta
      })

  }

  ngOnDestroy() {

  }

}
