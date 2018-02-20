import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const routerAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        width: '100%',
        height: '100%'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate(1500)
    ]),
    transition(':leave', [
      animate(1500, style({
        opacity: 0,
      }))
    ])
  ]);
