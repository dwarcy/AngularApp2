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
        let x = lastValueFrom(this.http.get('http://localhost:3000/ofertas'))
            .then((resposta: any) => {
                return resposta //retira o .json() pois o retorno http já é um json
            })
        return x
        // retornar uma promise Oferta[]

    }

}