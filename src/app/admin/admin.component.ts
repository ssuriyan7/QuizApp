import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private act: ActivatedRoute) { }

  ngOnInit() {
  }
  createQuiz() {
    this.router.navigate(['/createQuiz']);
  }
  viewResults() {
    this.router.navigate(['/results']);
  }
}
