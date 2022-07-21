import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  width: number = 10; // 10, 12, 14, 16, 20, 24, 28, 32
  height: number = 10;
  constructor() {}

  ngOnInit(): void {}
}
