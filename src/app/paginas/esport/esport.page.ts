import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esport',
  templateUrl: './esport.page.html',
  styleUrls: ['./esport.page.scss'],
})
export class EsportPage implements OnInit {
  componentePrimeiroNivel: nivel1[]=[
    {
      icone: 'remove',
      nome: 'FIFA',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'NBA',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'F1',
      link:'',
    },
    
    

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
