import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-component',
  imports: [TranslatePipe],
  templateUrl: './portfolio-component.html',
  styleUrl: './portfolio-component.scss',
})
export class PortfolioComponent {
  readonly projects = [
    {
      title: 'Join',
      image: 'assets/images/join.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'https://github.com/mein-name/join',
      live: 'https://github.com/mein-name/join',
    },
    {
      title: 'El Pollo Loco',
      image: 'assets/images/el-pollo-loco.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A jump and run game based on an object-oriented approach. Help Pepe collect coins and defeat the final enemy.',
      github: 'https://github.com/mein-name/pollo-loco',
      live: 'https://github.com/mein-name/pollo-loco',
    },
    // {
    //   title: 'DABubble',
    //   image: 'assets/images/da-bubble.png',
    //   technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS'],
    //   description:
    //     'A team communication application inspired by Slack. Communicate in channels and exchange direct messages.',
    //   github: 'https://github.com/mein-name/dabubble',
    //   live: 'https://github.com/mein-name/dabubble'
    // },
  ];
}
