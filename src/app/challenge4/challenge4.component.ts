import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge4',
  templateUrl: './challenge4.component.html',
  styleUrls: ['./challenge4.component.scss'],
})
export class Challenge4Component implements OnInit {

  cardArray = [
    {
      header: 'Kokorowatari',
      price: '444',
      image: '../../assets/POR1PVd.jpg',
      description:
        'Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.',
    },
    {
      header: 'Star Platinum',
      price: '555',
      image: '../../assets/cdJ6GDW.jpg',
      description:
        'Star Platinum is the Stand of Kujo Jotaro. It has long, flowing hair, and resembling a tall, well-built man. It is silent, except when it throws punches, during which it cries "ORAORAORA" loudly and repeatedly.',
    },
    {
      header: 'The World',
      price: '500',
      image: '../../assets/3KBm7hK.jpg',
      description:
        'The World is the Stand of DIO. The World shows no particular personality, although it occasionally smiles as it pummels others, hinting that it may be a rather cruel entity that takes pleasure in causing pain. Its Stand cry, seemingly communicated by DIO, is Muda Muda Muda!',
    },
    {
      header: '3D Maneuver Gear',
      price: '200',
      image: '../../assets/9E0Agn2.jpg',
      description:
        'The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility. The equipment enables the user to fight in a 3D space as opposed to a 2D one. The equipment itself takes the form of a body harness that encompasses much of the body below the neck.',
    },
    {
      header: 'Excalibur',
      price: '300',
      image: '../../assets/nutN73L.jpg',
      description:
        'Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur. As that which can be called the physical actualization of her ideals and the symbol of her heroism, it is her greatest and most powerful Noble Phantasm.',
    },
    {
      header: 'Dragon Slayer',
      price: '450',
      image: '../../assets/WPdYq5Z.jpg',
      description:
        'It was too big to be called a sword. Massive, thick, heavy, and far too rough. Indeed, it was a heap of raw iron. The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
