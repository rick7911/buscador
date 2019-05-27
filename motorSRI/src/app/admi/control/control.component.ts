import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../app/pages.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  lista:any[]=[];
  constructor( private servicio: PagesService) {
    this.lista = this.servicio.mostrarPaginas();
   }

  ngOnInit() {
  }

}
