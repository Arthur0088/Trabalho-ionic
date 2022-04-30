import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fps',
  templateUrl: './fps.page.html',
  styleUrls: ['./fps.page.scss'],
})
export class FpsPage implements OnInit {
  componentePrimeiroNivel: nivel1[]=[
    {
      icone: 'remove',
      nome: 'CS Go',
      link:'',
    },
    {
      icone: 'remove',
      nome: 'R6',
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