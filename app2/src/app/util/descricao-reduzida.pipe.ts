import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

    transform(texto: string): string {

        if (texto.length > 15) {
            return texto.substring(0,15) + '... '
        }

        return texto

    }

}