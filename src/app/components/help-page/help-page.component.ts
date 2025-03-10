import { Component } from '@angular/core';
import { IconCardComponent } from '../icon-card/icon-card.component';
import { IconCardType } from '../../interfaces/icon-card-type';

@Component({
  selector: 'app-help-page',
  imports: [IconCardComponent],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {
parentCard: IconCardType = {
    title: 'Titulo ejemplo',
    text: 'Parrafo 1 del componente',
    iconClass: 'fa-solid fa-book'
  };
  cards: Array<IconCardType> =[
    {
      title: 'Titulo ejemplo 1',
      text: 'Parrafo 1 del componente',
      iconClass: 'fa-solid fa-book',
    },
    {
      title: 'Titulo ejemplo 2',
      text: 'Parrafo 1 del componente',
      iconClass: 'fa-solid fa-book',
    },
    {
      title: 'Titulo ejemplo 3',
      text: 'Parrafo 1 del componente',
      iconClass: 'fa-solid fa-book',
    },
  ]

  seeSelectedCard(value : string){
    console.log(value);
  }
}
