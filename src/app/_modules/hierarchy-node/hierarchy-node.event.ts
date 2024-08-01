import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NodeEventEmiter {
    nodeItemClick = new EventEmitter<{ $event: any, item: any }>();

    emitEvent = <T, T1>($event: T, item: T1): void => {
        this.nodeItemClick.emit({ $event, item });
    }
}