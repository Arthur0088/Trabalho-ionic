import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.page.html',
  styleUrls: ['./campeonato.page.scss'],
})
export class CampeonatoPage implements OnInit {

  componentePrimeiroNivel: nivel1[]=[
    {
      icone: 'remove',
      nome: 'Nacional',
      link:'/nacional',
    },
    {
      icone: 'remove',
      nome: 'Intenacional',
      link:'/internacional',
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