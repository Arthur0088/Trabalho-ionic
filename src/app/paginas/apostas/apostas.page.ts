import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apostas',
  templateUrl: './apostas.page.html',
  styleUrls: ['./apostas.page.scss'],
})
export class ApostasPage implements OnInit {
  componenteSegundoNivel: nivel2[]=[
    {
      icone: 'remove',
      nome: 'Campeonato',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'Time',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'Jogador',
      link:'',
    },
    
   

  ]
  constructor() { }

  ngOnInit() {
  }
}
interface nivel2{
  icone: string;
  nome: string;
  link: string;
}
