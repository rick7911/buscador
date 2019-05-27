import { Component, OnInit, Input, Output } from '@angular/core';

import { PagesService } from '../../app/pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @Input() palabra:string;
 
  constructor( private router:Router) {
    }

  ngOnInit() {
  }

   buscarPalabra(){
    var input, value;
      input = document.getElementById('palabraBuscar');
      value = input.value.toLowerCase();
      if (value.length > 0){
        this.router.navigate(['/buscador',value]);
      }
  }

}
