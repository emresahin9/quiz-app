import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {

  player: Player;

  constructor(private router: Router) { }
  
    ngOnInit(): void {
      if (localStorage.getItem('playerName') === null) 
        this.router.navigate(['']);
      this.player = new Player();
      this.player.name = localStorage.getItem('playerName');
      this.player.correctAnswers = parseInt(localStorage.getItem('correctAnswers'));
      this.player.wrongAnswers = parseInt(localStorage.getItem('wrongAnswers'))

      localStorage.removeItem('playerName');
      localStorage.removeItem('correctAnswers');
      localStorage.removeItem('wrongAnswers');
    }

}
