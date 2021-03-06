import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css']
})
export class CreatequizComponent implements OnInit {

  constructor(private quizService: QuizService) { }
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public invalid="";
  public questioninvalid="";
  public validmsg;
  public next=true;
  public validate=false;
  public submit=false;
  public clicked = false;
  public choicebox1 = false;
  public choicebox2 = false;
  public choicebox3 = false;
  public quiz;
  ngOnInit() {
  }
  public checkboxone(e){
    this.choicebox1=e.target.checked;
    this.choicebox2=false;
    this.choicebox3=false;
    //console.log(this.choicebox1,this.choicebox2,this.choicebox3);
  }
  public checkboxtwo(e){
    this.choicebox1=false;
    this.choicebox2=e.target.checked;
    this.choicebox3=false;
    //console.log(this.choicebox1,this.choicebox2,this.choicebox3);
  }
  public checkboxthree(e){
    this.choicebox1=false;
    this.choicebox2=false;
    this.choicebox3=e.target.checked;
    //console.log(this.choicebox1,this.choicebox2,this.choicebox3);
  }
  public createQuiz(quizname:string) {
    if(!((quizname.trim()).length === 0)) {
      this.clicked = true;
      this.invalid = "";
      this.quizService.createQuiz(quizname);
    } 
    else {
      this.invalid = "Please enter a quiz name";
      this.clicked = false;
    }
    
  }

  public insertQuestion(questionText: string,choice1: string,choice2: string,choice3: string) {
    this.validateBtnState = ClrLoadingState.LOADING;
    if(this.next) {
      if(questionText.trim().length !== 0 && choice1.trim().length !==0 && choice2.trim().length !==0 && choice3.trim().length !==0) {
        this.next=false;
        this.validmsg="";
        this.questioninvalid="";
        this.submit=true;
        this.validate=true;
        this.quizService.insertQuestion(questionText);
        this.validateBtnState = ClrLoadingState.SUCCESS;
      }
      else {
        this.validateBtnState = ClrLoadingState.DEFAULT;
        this.questioninvalid="Please fill all the fields";
        this.validmsg="";
      }
    }
    else {
      this.validateBtnState = ClrLoadingState.DEFAULT;
    }
  }

  public insertOption(choice1: string,choice2: string,choice3: string) {
    if(this.validate) {
      this.next = true;
      this.quizService.insertOption(choice1,choice2,choice3,this.choicebox1,this.choicebox2,this.choicebox3);
      this.choicebox1=false;
      this.choicebox2=false;
      this.choicebox3=false;
      this.questioninvalid="";
      this.validate=false;
    }
    else {
      this.validmsg="Please validate first!";
    }
  }

  /* public insertOption(questionText: string,choice1: string,choice2: string,choice3: string) {
    this.validateBtnState = ClrLoadingState.LOADING;
    if(this.next) {
      if(questionText.trim().length !== 0 && choice1.trim().length !==0 && choice2.trim().length !==0 && choice3.trim().length !==0) {
        //this.next=false;
        //this.validmsg="";
        //console.log(this.choicebox1,this.choicebox2,this.choicebox3);
        //this.quizService.insertOption(choice1,choice2,choice3,this.choicebox1,this.choicebox2,this.choicebox3);
        //this.questioninvalid="";
        //this.validateBtnState = ClrLoadingState.SUCCESS;
        //this.submit=true;
        //this.validate=true;
        //this.choicebox1=false;
        //this.choicebox2=false;
        //this.choicebox3=false;
    }
    else {
      //this.validateBtnState = ClrLoadingState.DEFAULT;
      //this.questioninvalid="Please fill all the fields";
      //this.validmsg="";
    }
    }
    else {
      //this.validateBtnState = ClrLoadingState.DEFAULT;
    }
  }
  public insertQuestion(questionText: string) {
    //this.validateBtnState = ClrLoadingState.DEFAULT;
    if(this.validate) {
      //this.next = true;
      //this.quizService.insertQuestion(questionText);
      //this.questioninvalid="";
      //this.validate=false;
    }
    else {
      //this.validmsg="Please validate first!";
    }
  } */
}
