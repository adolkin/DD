import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const routerAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)',
        width: '100%',
        height: '100%'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(100%)',
      }),
      animate(1000)
    ]),
    transition(':leave', [
      animate(1000, style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }))
    ])
  ]);
