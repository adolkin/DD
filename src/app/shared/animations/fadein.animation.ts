import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    query('div', [
      style({ opacity: 0 }),
      stagger(200, [
        animate(2000)
      ])
    ])
  ])
])
