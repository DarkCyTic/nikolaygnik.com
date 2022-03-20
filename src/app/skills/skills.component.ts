import { Component, Input, OnInit } from '@angular/core';
import skills from '../../assets/skills.json';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input()
  skillsCategoryName: string;
  @Input()
  title: string;
  @Input()
  subTitle: string;

  skills: [];

  constructor() {}

  ngOnInit() {
    this.skills = skills[this.skillsCategoryName];
  }

}
