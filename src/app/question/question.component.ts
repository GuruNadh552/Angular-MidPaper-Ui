import { Component} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  questions = ["Write the Strength and Weakness of sequence and Collaboration Diagram.","Comparison between sequence and Collaboration Diagram.","What is State Chart Diagram? When to use State Diagram?","What is Activity Diagram? Mention the Elements of an Activity Diagram.","What is Package Diagram? When to use package Diagram?","Differentiate between Component and Deployment Diagram.","What is Class Diagram? When to use Class Diagrams?","Mention the four major phases of Unified Process.","What is Object Oriented Analysis and Design?","Write the benefits of iterative Development"];
  constructor() { }
  ngOnInit(){
  }
  printPaper(){
    window.print();
  }

}
