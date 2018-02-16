import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s 1s')
  ])
])
