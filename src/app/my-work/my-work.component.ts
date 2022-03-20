import { Component, OnInit } from '@angular/core'
import projects from '../../assets/projects.json';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects$: any

  constructor() { }

  ngOnInit() {
    this.projects$ = projects['projects'];
  }

}
