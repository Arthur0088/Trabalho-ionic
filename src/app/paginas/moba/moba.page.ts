import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moba',
  templateUrl: './moba.page.html',
  styleUrls: ['./moba.page.scss'],
})
export class MobaPage implements OnInit {
  componentePrimeiroNivel: nivel1[]=[
    {
      icone: 'remove',
      nome: 'Dota',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'LOL',
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