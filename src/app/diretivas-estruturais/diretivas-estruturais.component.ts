import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  items = [
    {
      title: 'Pessoal',
      icon: 'perm_identity',
      desc: 'Acompanhamento diário por funcionário.',
      url: '/relatorios/pessoal',
    },
    {
      title: 'Gerencial',
      icon: 'business',
      desc: 'Acompanhamento periódico por lotação.',
      url: '/relatorios/gerencial',
    },
    {
      title: 'Atividades Tempo',
      icon: 'assignment',
      desc: 'Acompanhamento diário por lotação.',
      url: '/relatorios/atividadetempo',
    },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
