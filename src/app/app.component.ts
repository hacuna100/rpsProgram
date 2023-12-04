import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pResult = "❔";
  cResult = "❔";
  resultMsg = "Best 2 out of 3 wins";
  title = 'rpsProgram';
  drawMsg = "Its a Draw!";
  winMsg = "You won the round!";
  loseMsg = "You lost the round!";
  gameWinMsg = "You won the game!";
  gameLoseMsg = "You lost the game!";
  pWins = 0;
  cWins = 0;
  pMax = 2;
  cMax = 2;


  getComputerChoice() {
    let choice;

    choice = Math.floor(Math.random() * 3)

    switch (choice) {
      case 0:
        this.cResult = "✊";
        break;
      case 1:
        this.cResult = "✋";
        break;
      case 2:
        this.cResult = "✌️";
        break;
    }

    this.cResult;
  }

  rockChoice() {
    this.pResult = "✊";
    this.getComputerChoice();

    switch (this.cResult) {
      case "✊":
        this.resultMsg = this.drawMsg;
        break;
      case "✋":
        this.resultMsg = this.loseMsg;
        this.cWins++;
        break;
      case "✌️":
        this.resultMsg = this.winMsg;
        this.pWins++
        break;
    }
  }

  paperChoice() {
    this.pResult = "✋";
    this.getComputerChoice();

    switch (this.cResult) {
      case "✊":
        this.resultMsg = this.winMsg;
        this.pWins++
        break;
      case "✋":
        this.resultMsg = this.drawMsg;
        break;
      case "✌️":
        this.resultMsg = this.loseMsg;
        this.cWins++;
        break;
    }
  }

  scissorChoice() {
    this.pResult = "✌️";
    this.getComputerChoice();

    switch (this.cResult) {
      case "✊":
        this.resultMsg = this.loseMsg;
        this.cWins++;
        break;
      case "✋":
        this.resultMsg = this.winMsg;
        this.pWins++;
        break;
      case "✌️":
        this.resultMsg = this.drawMsg;
        break;
    }
  }

  winResult() {
    return this.pWins == this.pMax;
  }

  loseResult() {
    return this.cWins == this.cMax;
  }

  playAgain() {
    this.pResult = "❔";
    this.cResult = "❔";
    this.pWins = 0;
    this.cWins = 0;
  }
}

