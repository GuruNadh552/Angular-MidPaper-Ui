import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qinput',
  templateUrl: './qinput.component.html',
  styleUrls: ['./qinput.component.css']
})
export class QinputComponent implements OnInit {


  ques = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"]
  ans = ["","","","","","","","","",""]

  constructor() { }

  ngOnInit(): void {
  }

  

}
