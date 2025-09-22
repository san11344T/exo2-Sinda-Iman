import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
   public films = [
    { titre: 'Clueless', image: 'assets/clueless.jpg' },
    { titre: 'La La Land', image: 'assets/lalaland.jpg' },
    { titre: 'Mean Girls', image: 'assets/meangirls.jpeg' },
    { titre: 'La vita è bella ', image: 'assets/lavitaebella.jpg' },
    { titre: 'Oppeinheimer', image: 'assets/oppeinheimer.jpg' },
  ];

  public selectedFilm: any = null;

  public afficherFilm(film: any) {
    this.selectedFilm = film;
  }
}
