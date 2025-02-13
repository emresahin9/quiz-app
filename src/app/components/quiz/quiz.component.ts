import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {

  questions: Question[] = [];
  questionOrder: number;

  constructor(private httpClient: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('playerName') === null)
      this.router.navigate(['']);
    this.getQuestions();
    this.questionOrder = parseInt(localStorage.getItem('questionOrder'));
  }

  getQuestions() {
    this.questions = this.dataService.getQuestions();
  }

  click(answer: string,) {
    const isAnswerCorrect = this.questions
      .find((question) => question.questionId === parseInt(localStorage.getItem('questionOrder')))?.options
      .some((option) => option.answer === answer && option.isCorrect);
    this.showMessage(isAnswerCorrect);

    if (isAnswerCorrect)
      localStorage.setItem('correctAnswers', (parseInt(localStorage.getItem('correctAnswers')) + 1).toString());
    else
      localStorage.setItem('wrongAnswers', (parseInt(localStorage.getItem('wrongAnswers')) + 1).toString());
    
    if (this.questions.length > parseInt(localStorage.getItem('questionOrder'))) {
      localStorage.setItem('questionOrder', (parseInt(localStorage.getItem('questionOrder')) + 1).toString());
      setTimeout(() => {
        window.location.reload()
      }, 1500);
    }
    else {
      setTimeout(() => {
        this.router.navigate(['result']);
      }, 1500);
    }
  }

  showMessage(isAnswerCorrect: boolean) {
    let messageContainer;
    if (isAnswerCorrect) {
      messageContainer = document.getElementById("correct-message-container") as HTMLElement;
    }
    else {
      messageContainer = document.getElementById("wrong-message-container") as HTMLElement;
    }
    messageContainer.classList.remove("hidden");
    (document.getElementById('quizBox') as HTMLElement).remove();
  }

}
