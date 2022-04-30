import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.page.html',
  styleUrls: ['./equipes.page.scss'],
})
export class EquipesPage implements OnInit {

  componenteSegundoNivel: nivel2[]=[
    {
      icone: 'remove',
      nome: 'Fanatic',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'Pain Games',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'Evil Genius',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'OG',
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

