import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { LoginComponent } from './components/login/login.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:LoginComponent},
  {path:"quiz", component:QuizComponent},
  {path:"result", component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
