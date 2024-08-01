// expand-collapse.animation.ts
import { trigger, state, style, transition, animate } from '@angular/animations';

export const recursiveItemAnimation = trigger('recursiveItemAnimation', [
    trigger('recursiveItemAnimation', [
        state('expanded', style({ height: '*', opacity: 1 })),
        state('collapsed', style({ height: '0px', opacity: 0 })),
        transition('expanded <=> collapsed', [
            animate('300ms ease-in-out')
        ])
    ])
]);


export const expandcollapse = trigger('expandcollapse', [
    state('expanded', style({ height: '*', opacity: 1 })),
    state('collapsed', style({ height: '0px', opacity: 0 })),
    transition('expanded <=> collapsed', [
        animate('300ms ease-in-out')
    ])
])

