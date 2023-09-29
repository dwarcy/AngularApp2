import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Observer, interval } from 'rxjs';

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
    
    //retorna um observable, que com o subscribe usamos para assistir qualquer mudança nessa url
    /*this.route.params.subscribe((parametro: any) => {console.log(parametro)},
        (erro: any) => console.log(erro),
        () => console.log('processamento concluido')
    )
    */

    /*
    let tempo = interval(1000)
    tempo.pipe(
      take(5),
      finalize(() => console.log('contagem finalizada'))
    ).subscribe((value: number) => {
      console.log(value)
    })
    */

    //observable - observável
    let meuObservableTeste = new Observable((observer: Observer<number>) => {
      observer.next(1)
      observer.next(2)
      observer.next(3)
      observer.error('erro')
    })

    //observable - observador
    meuObservableTeste.subscribe(
      //resultado recebe o string do .next
      (resultado: number) => console.log(resultado + 10)
    )

  }

}
