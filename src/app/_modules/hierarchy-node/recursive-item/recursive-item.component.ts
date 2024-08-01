import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeirarchyNodeService } from '../../services/heirarchy-node.service';
import { CommonModule } from '@angular/common';
import { expandcollapse } from '../../../@imports/shared/component.animation';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  selector: 'recursive-item',
  templateUrl: './recursive-item.component.html',
  styleUrls: ['./recursive-item.component.scss'],
  animations: [expandcollapse],
  imports:[CommonModule,IconFieldModule,InputIconModule]
})

export class RecursiveItemComponent implements OnInit {
  @Input() item!: MenuItem;
  @Input() expandedItem!: MenuItem;
  @Output() toggle = new EventEmitter<any>();

  selectedLabel!: string;
  constructor(private nodeService: HeirarchyNodeService) { }

  ngOnInit(): void {
  }

  get isExpanded(): boolean {
    return this.expandedItem === this.item || this.nodeService.isParentOf(this.expandedItem, this.item) || this.nodeService.isChildOf(this.expandedItem, this.item);
  }

  onToggle(event: MouseEvent, selectedMenuItem: MenuItem) {
    this.selectedLabel = selectedMenuItem?.label || ''
    this.nodeService.emitEvent(event, selectedMenuItem);
    event.stopPropagation();
    if (this.isExpanded) {
      this.toggle.emit(this.item);
    } else {
      this.toggle.emit(this.item);
    }
  }

  onToggleSubItem(item: any) {
    this.toggle.emit(item);
  }
  isSelected = (node: any): boolean => this.isExpanded && this.selectedLabel === node?.label;
}
