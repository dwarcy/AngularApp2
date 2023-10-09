import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) {

  }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa //retorno Oferta[]
      .pipe(
        debounceTime(500),  //executa a ação do switchMap após 1 segundo
        distinctUntilChanged(),
        switchMap((termo: string) => {
          
          if(termo.trim() === ''){
            //retorna um observable de <Ofertas[]> vazio
            let a = of<Oferta[]>([])
            return a
          }

          return this.ofertasService.pesquisaOfertas(termo)

        }),
        catchError((err: any) => {
          let b = of<Oferta[]>([])
          return b
        })
      )

  }

  public pesquisa(termoDaBusca: string): void {

    this.subjectPesquisa.next(termoDaBusca)

  }

  public limpaPesquisa(): void {

    this.subjectPesquisa.next('')

  }

}
