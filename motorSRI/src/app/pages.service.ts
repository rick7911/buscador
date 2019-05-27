import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private paginasResultantes: Pagina[] = [
    {
      titulo: "Beneficios de tener un gato - Purina",
      descripcion: "No hay duda de ello, los gatos son grandes mascotas. Después de todo, ¿qué hay mejor que volver a casa al final de un duro día y escuchar el ronroneo de ...",
      palabraClave: "gato, comida",
      nameDoc: "https://www.purina.es/gatos/tener-nuevo-gato/buscar-gato-adecuado-para-mi/beneficios-de-tener-un-gato"
  },
  {
      titulo: "Tener un nuevo gato | PURINA",
      descripcion: "Las vacaciones están a la vuelta de la esquina y estás ansioso por disfrutar de ellas junto a tu gato. No dudes en hacerlo. Ya sabes qué #juntoslavidaesmejor.",
      palabraClave: "gato, comida",
      nameDoc: "https://www.purina.es/gatos/tener-nuevo-gato"
  },
  {
    titulo: "Beneficios de tener un gato - Purina",
    descripcion: "Las vacaciones están a la vuelta de la esquina y estás ansioso por disfrutar de ellas junto a tu gato. No dudes en hacerlo. Ya sabes qué #juntoslavidaesmejor.",
    palabraClave: "gato, comida",
    nameDoc: "https://listado.mercadolibre.com.ar/animales-mascotas/gatos/"
  },
  {
    titulo: "Gatos en Mercado Libre Argentina",
    descripcion: "No hay duda de ello, los gatos son grandes mascotas. Después de todo, ¿qué hay mejor que volver a casa al final de un duro día y escuchar el ronroneo de ...",
    palabraClave: "gato, comida",
    nameDoc: "https://www.purina.es/gatos/tener-nuevo-gato/buscar-gato-adecuado-para-mi/beneficios-de-tener-un-gato"
  }
   ];

  constructor() { }

  buscarPaginas( palabraClave:string ){
    
    let paginasRes:Pagina[] = [];
    palabraClave = palabraClave.toLowerCase();
    for (let pagina of this.paginasResultantes){
      let nombre = pagina.titulo.toLowerCase();

      if( nombre.indexOf( palabraClave ) >= 0 ){
        paginasRes.push( pagina );
      }
    }
    return paginasRes;
  }
  mostrarPaginas(){
    return this.paginasResultantes;
  }
}

export interface Pagina{
  titulo: string;
  descripcion: string;
  palabraClave: string;
  nameDoc: string;
  idx?: number;
}

