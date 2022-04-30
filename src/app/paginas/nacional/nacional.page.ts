import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nacional',
  templateUrl: './nacional.page.html',
  styleUrls: ['./nacional.page.scss'],
})
export class NacionalPage implements OnInit {
  componentePrimeiroNivel: nivel1[]=[
    {
      icone: 'remove',
      nome: 'Brasileiro',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'Estaduais',
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
