import { Component } from '@angular/core';
import { Film } from '../../interfaces/film'; 

@Component({
  selector: 'app-liste',
  templateUrl: './liste.html',
  styleUrls: ['./liste.scss']
})
export class Liste {
  public films: Film[] = [
    { titre: 'Clueless', image: 'assets/clueless.jpg' },
    { titre: 'La La Land', image: 'assets/lalaland.jpg' },
    { titre: 'Mean Girls', image: 'assets/meangirls.jpeg' },
    { titre: 'La vita è bella', image: 'assets/lavitaebella.jpg' },
    { titre: 'Oppenheimer', image: 'assets/oppeinheimer.jpg' },
  ];

  public selectedFilm: Film | null = null; 

  public afficherFilm(film: Film) {  
    this.selectedFilm = film;
  }
}

