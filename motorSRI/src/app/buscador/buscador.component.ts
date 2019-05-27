import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../../app/pages.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  @Input() palabra: string;
  paginasR:any[]=[];
  tamanio: number;

  constructor(private activatedRoute:ActivatedRoute,private router:Router, private servicio: PagesService) {
    this.activatedRoute.params.subscribe(data =>{
        console.log(data['palabra']);

        this.palabra = data['palabra'];
        this.mostrarResultados();
        this.tamanio = this.paginasR.length;

    })

   }

  ngOnInit() {
  }
  buscarPaginas(){
    var input, value;
      input = document.getElementById('palabraBuscar');
      value = input.value.toLowerCase();
      if (value.length > 0){
        this.router.navigate(['/buscador',value]);
      }
  }

  mostrarResultados(){
    var p;
    p= this.palabra.toUpperCase();
    this.paginasR = this.servicio.buscarPaginas(p);
   
  }

}
