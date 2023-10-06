import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})

@Injectable()
export class ComoUsarComponent {

  public comoUsar: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) {

  }

  ngOnInit() {

    this.ofertasService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((resposta: string) => {
        this.comoUsar = resposta
      })

  }

}
