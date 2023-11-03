import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: any = {
    technologies: [
      { name: 'Spring Boot, Angular', percent: 98, remark: 'excellent' },
      { name: 'Laravel, React Redux', percent: 80, remark: 'good' },
      { name: 'Flutter, Kotlin, Android', percent: 70, remark: 'excellent' },
      { name: 'Python, Java, C#', percent: 80, remark: 'very-good' },
      {
        name: 'MERN stack, BootStrap, HTML5, CSS3 ',
        percent: 90,
        remark: 'excellent',
      },
    ],
    tools: [
      { name: 'Github, Gitlab, Bitbuket', percent: 90, remark: 'excellent' },
      { name: 'Jenkins, Kong, CI/CD', percent: 90, remark: 'excellent' },
      { name: 'Linux, Windows, Mac', percent: 95, remark: 'very-good' },
      { name: 'MySql, Postgress, Oracle', percent: 90, remark: 'excellent' },
      { name: 'Docker, OCP, AWS, Kubernetes', percent: 85, remark: 'average' },
    ],
    methodologies: [
      { name: 'Scrum [Jira]', percent: 70, remark: 'very-good' },
      { name: 'Uml', percent: 90, remark: 'excellent' },
      { name: 'Disign Thinking', percent: 70, remark: 'good' },
      { name: 'TDD [Mokito]', percent: 90, remark: 'excellent' },
      { name: 'DevOps', percent: 80, remark: 'average' },
    ],
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {}
}
