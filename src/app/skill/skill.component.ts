import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  width: string = '10'; // 10, 12, 14, 16, 20, 24, 28, 32
  height: string = '10';
  constructor() {}

  ngOnInit(): void {}
}
