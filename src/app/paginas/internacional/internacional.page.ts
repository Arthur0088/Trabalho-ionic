import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internacional',
  templateUrl: './internacional.page.html',
  styleUrls: ['./internacional.page.scss'],
})
export class InternacionalPage implements OnInit {
  componentePrimeiroNivel: nivel1[]=[
    {
      icone: 'remove',
      nome: 'África',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'América do Norte',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'América Central',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'América do Sul',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'Ásia',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'Oceania',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'Europa',
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