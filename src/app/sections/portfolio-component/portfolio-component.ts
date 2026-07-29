import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-component',
  imports: [],
  templateUrl: './portfolio-component.html',
  styleUrl: './portfolio-component.scss',
})
export class PortfolioComponent {
  readonly projects = [
    {
      number: '01/03',
      title: 'Join',
      image: 'assets/images/join.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'https://github.com/mein-name/join',
    },
    {
      number: '02/03',
      title: 'El Pollo Loco',
      image: 'assets/images/el-pollo-loco.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A jump and run game based on an object-oriented approach. Help Pepe collect coins and defeat the final enemy.',
      github: 'https://github.com/mein-name/pollo-loco',
    },
    {
      number: '03/03',
      title: 'DABubble',
      image: 'assets/images/da-bubble.png',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS'],
      description:
        'A team communication application inspired by Slack. Communicate in channels and exchange direct messages.',
      github: 'https://github.com/mein-name/dabubble',
    },
  ];
}
