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
        let b = this.http.get('http://localhost:3000/ofertas')
        
        return lastValueFrom(b)
            .then((resposta: any) => {
                //trasforma a promise recebida em um json
                return resposta.json()
            })

        // retornar uma promise Oferta[]

    }

}