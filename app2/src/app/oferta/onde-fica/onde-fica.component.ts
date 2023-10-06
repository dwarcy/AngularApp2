import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})

@Injectable()
export class OndeFIcaComponent {

  public ondeFica: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
    ) {

  }

  ngOnInit() {

    this.ofertaService.getOndeFicaPorId(this.route.parent.snapshot.params['id'])
      .then((resposta: string) => {
        this.ondeFica = resposta
      })

  }

}
