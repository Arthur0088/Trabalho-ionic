import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.page.html',
  styleUrls: ['./tipos.page.scss'],
})
export class TiposPage implements OnInit {
  componenteSegundoNivel: nivel2[]=[
    {
      icone: 'remove',
      nome: 'MOBA',
      link:'/moba',
    },
    {
      icone: 'remove',
      nome: 'FPS',
      link:'/fps',
    },
    {
      icone: 'remove',
      nome: 'Esportes',
      link:'/esport',
    },
    {
      icone: 'remove',
      nome: 'Luta',
      link:'/luta',
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

