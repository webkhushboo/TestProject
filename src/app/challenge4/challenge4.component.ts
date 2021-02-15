import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-challenge4',
  templateUrl: './challenge4.component.html',
  styleUrls: ['./challenge4.component.scss'],
})
export class Challenge4Component implements OnInit {

  cardArray = [
    { id: 1,
      header: 'Kokorowatari',
      price: 444,
      image: '../../assets/POR1PVd.jpg',
      description:
        'Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.',
    },
    {
      id: 2,
      header: 'Star Platinum',
      price: 555,
      image: '../../assets/cdJ6GDW.jpg',
      description:
        'Star Platinum is the Stand of Kujo Jotaro. It has long, flowing hair, and resembling a tall, well-built man. It is silent, except when it throws punches, during which it cries "ORAORAORA" loudly and repeatedly.',
    },
    { 
      id: 3,
      header: 'The World',
      price: 500,
      image: '../../assets/3KBm7hK.jpg',
      description:
        'The World is the Stand of DIO. The World shows no particular personality, although it occasionally smiles as it pummels others, hinting that it may be a rather cruel entity that takes pleasure in causing pain. Its Stand cry, seemingly communicated by DIO, is Muda Muda Muda!',
    },
    { 
      id: 4,
      header: '3D Maneuver Gear',
      price: 200,
      image: '../../assets/9E0Agn2.jpg',
      description:
        'The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility. The equipment enables the user to fight in a 3D space as opposed to a 2D one. The equipment itself takes the form of a body harness that encompasses much of the body below the neck.',
    },
    { 
      id: 5,
      header: 'Excalibur',
      price: 300,
      image: '../../assets/nutN73L.jpg',
      description:
        'Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur. As that which can be called the physical actualization of her ideals and the symbol of her heroism, it is her greatest and most powerful Noble Phantasm.',
    },
    { 
      id: 6,
      header: 'Dragon Slayer',
      price: 450,
      image: '../../assets/WPdYq5Z.jpg',
      description:
        'It was too big to be called a sword. Massive, thick, heavy, and far too rough. Indeed, it was a heap of raw iron. The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.',
    },
  ];
  carts = [];
  totalSum =0;
  
  /**
   * Life cycle method
   * @param _snackBar MatSnackBar
   */
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  
  /**
   * Add product to cart
   * @param product 
   */
  addToCart(product) {
    this.totalSum += product.price;
    this.carts.push(product);
  }
  
  /**
   * Remove from cart
   * @param product item to be removed
   */
  removeCart(product) {
    this.totalSum = this.totalSum - product.price;
    this.carts = this.carts.filter(item => item.id != product.id);
  }
  
  /**
   * Buy items 
   */
  buyItems() {
    if(this.totalSum === 0) {
      this._snackBar.open('Please buy something', 'X', {
        duration: 2000,
      });
    } else if (this.totalSum > 1000 ){
      this._snackBar.open("You don't have enough gold to buy", 'X', {
        duration: 2000,
      });
    } else {
      this._snackBar.open('Transaction success!!', 'X', {
        duration: 2000,
      });
    }
  }
}
