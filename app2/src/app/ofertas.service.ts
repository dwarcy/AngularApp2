import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Oferta } from "./shared/oferta.model"

import { Observable, lastValueFrom, map, retry } from "rxjs"

@Injectable()
export class OfertasService {

    private url_api = 'http://localhost:3000'

    constructor(private http:HttpClient) {

    }

    public getOfertas(): Promise<Oferta[]> {
        
        // efetuar uma requisicao http
        let x = lastValueFrom(this.http.get(`${this.url_api}/ofertas?destaque=true`))
            .then((resposta: any) => {
                return resposta //retira o .json() pois o retorno http já é um json
            })
        return x
        // retornar uma promise Oferta[]

    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {

        //a recebe a requisição http já transformada de json para Promise
        let a = lastValueFrom(this.http.get(`${this.url_api}/ofertas?categoria=${categoria}`))
            .then((resposta: any) => { return resposta })
        return a
    
    }

    public getOfertaPorId(id: number): Promise<Oferta> {

        let b = lastValueFrom(this.http.get(`${this.url_api}/ofertas?id=${id}`))
            .then((resposta: any) => { 
                return resposta[0]
            }) 
        return b

    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {

        //recebe o observable transformado em Promise
        let c = lastValueFrom(this.http.get(`${this.url_api}/como-usar?id=${id}`))
            .then((resposta: any) => {
                return resposta[0].descricao 
            })
        return c

    }

    public getOndeFicaPorId(id: number): Promise<string> {

        let d = lastValueFrom(this.http.get(`${this.url_api}/onde-fica?id=${id}`))
            .then((resposta: any) => {
                return resposta[0].descricao
            })
        return d

    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http.get(`${this.url_api}/ofertas?descricao_oferta_like=${termo}`) //método get retorna um obsevable do tipo response
            //necessario transformar esse observable em uma string de Oferta
            .pipe(
                retry(10),
                map((resposta: any) => resposta)
            )

    }

}