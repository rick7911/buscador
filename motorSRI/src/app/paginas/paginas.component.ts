import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {
  
  @Input() pagina:any = {};
  @Input() indice:number;

  @Output() palabraBuscar: EventEmitter<number>;
  constructor( private router:Router ) { 
    this.palabraBuscar = new EventEmitter();
  }
  ngOnInit() {
  }
  

}
