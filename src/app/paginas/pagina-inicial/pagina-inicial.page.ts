import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit {

  componentePrimeiroNivel: nivel1[]=[
    {
      icone: 'trophy',
      nome: 'Campeonatos',
      link:'/campeonato',
    },
    {
      icone: 'today',
      nome: 'Equipes',
      link:'/equipes',
    },
    {
      icone: 'list',
      nome: 'Tipos',
      link:'/tipos',
    },
    {
      icone: 'cash',
      nome: 'Apostas',
      link:'/apostas',
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
