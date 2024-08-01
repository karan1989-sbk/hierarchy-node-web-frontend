import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeirarchyNodeService } from '../../services/heirarchy-node.service';
import { RecursiveItemComponent } from '../recursive-item/recursive-item.component';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../../@imports/shared/import.const';

@Component({
  selector: 'node-container',
  standalone: true,
  templateUrl: './node-container.component.html',
  styleUrls: ['./node-container.component.scss'],
  imports:[CommonModule,RecursiveItemComponent,PrimengModule]
})
export class NodeContainerComponent implements OnInit {


  @Input() nodes: MenuItem[] = [];
  @Input() ngStyle: any;
  expandedItem: MenuItem = {} as MenuItem;
  constructor(private heirarchyNodeService: HeirarchyNodeService) { }

  ngOnInit(): void {}

  onToggle(item: MenuItem) {
    if (this.expandedItem !== item) {
      item.expanded = true;
      this.expandedItem = item;
    } else {
      if (this.expandedItem.target === item.target) {
        this.expandedItem = this.heirarchyNodeService.parentOf(this.nodes, item) || {} as MenuItem; ;
      }
      item.expanded = false;
    }
  }

}
