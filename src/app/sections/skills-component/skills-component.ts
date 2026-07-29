
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-component',
  imports: [],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.scss'
})
export class SkillsComponent {
  readonly skills = [
    {
      name: 'Angular',
      icon: 'assets/icons/angular-icon.png'
    },
    {
      name: 'TypeScript',
      icon: 'assets/icons/ts-icon.png'
    },
    {
      name: 'JavaScript',
      icon: 'assets/icons/js-icon.png'
    },
    {
      name: 'HTML',
      icon: 'assets/icons/html-icon.png'
    },
    {
      name: 'CSS',
      icon: 'assets/icons/css-icon.png'
    },
    {
      name: 'Supabase',
      icon: 'assets/icons/supabase-icon.png'
    },
    {
      name: 'Git',
      icon: 'assets/icons/git-icon.png'
    },
    {
      name: 'Scrum',
      icon: 'assets/icons/scrum-icon.png'
    },
    {
      name: 'REST API',
      icon: 'assets/icons/rest-api-icon.png'
    },
    {
      name: 'Material Design',
      icon: 'assets/icons/material-icon.png'
    }
  ];
}