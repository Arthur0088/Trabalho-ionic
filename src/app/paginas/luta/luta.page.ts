import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luta',
  templateUrl: './luta.page.html',
  styleUrls: ['./luta.page.scss'],
})
export class LutaPage implements OnInit {

  componentePrimeiroNivel: nivel1[]=[
    {
      icone: 'remove',
      nome: 'Street Fighter',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'Mortal Kombat',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'Injustice',
      link:'',
    },
    {
      icone:'remove',
      nome:'Pokemon Go',
      link:'',
    }
    
    

  ]
  constructor() { }

  ngOnInit() {
  }
}
interface nivel1{
  icone: string;
  nome: string;
  link: string;
}
