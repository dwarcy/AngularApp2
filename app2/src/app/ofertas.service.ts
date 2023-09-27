import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Oferta } from "./shared/oferta.model"

import { lastValueFrom } from "rxjs"

@Injectable()
export class OfertasService {

    constructor(private http:HttpClient) {

    }

    public getOfertas(): Promise<Oferta[]> {
        
        // efetuar uma requisicao http
        let x = lastValueFrom(this.http.get('http://localhost:3000/ofertas?destaque=true'))
            .then((resposta: any) => {
                return resposta //retira o .json() pois o retorno http já é um json
            })
        return x
        // retornar uma promise Oferta[]

    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {

        //a recebe a requisição http já transformada de json para Promise
        let a = lastValueFrom(this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`))
            .then((resposta: any) => { return resposta })
        return a
    
    }

    public getOfertaPorId(id: number): Promise<Oferta> {

        let b = lastValueFrom(this.http.get(`http://localhost:3000/ofertas?id=${id}`))
            .then((resposta: any) => { 
                console.log(resposta[0])
                return resposta[0]
            })
        return b

    }

}