import { Component, NgModule } from '@angular/core';
import { IconCardComponent } from '../icon-card/icon-card.component';
import { IconCardType } from '../../interfaces/icon-card-type';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-help-page',
  imports: [IconCardComponent, NgModel],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {

  cards: Array<IconCardType> = [
    {
      title: 'Titulo ejemplo 1',
      text: 'Parrafo 1 del componente',
      iconName: 'book',
      iconColor: 'medium-blue'
    },
    {
      title: 'Titulo ejemplo 2',
      text: 'Parrafo 1 del componente',
      iconName: 'book',
      iconColor: 'light-blue'
    },
    {
      title: 'Titulo ejemplo 3',
      text: 'Parrafo 1 del componente',
      iconName: 'book',
      iconColor: 'grey'
    },
  ]

  seeSelectedCard(value: string) {
    console.log(value);
  }

}
