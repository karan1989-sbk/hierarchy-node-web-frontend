import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NodeService } from '../../services/nodeservice';
import { NodeContainerComponent } from '../node-container/node-container.component';
import { RecursiveItemComponent } from '../recursive-item/recursive-item.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { expandcollapse } from '../../../@imports/shared/component.animation';
import { HttpClientService } from '../../services/http-client.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'filter-menu',
  standalone: true,
  templateUrl: './oae-filter.component.html',
  styleUrls: ['./oae-filter.component.scss'],
  animations: [expandcollapse],
  imports: [
    CommonModule,
    ButtonModule,
    HttpClientModule,
    NodeContainerComponent,
    RecursiveItemComponent,
  ],
  providers:[HttpClientService,HttpClient],
  encapsulation: ViewEncapsulation.Emulated
})
export class OaeFilterComponent implements OnInit {
  items: MenuItem[] = [];
  isShow: boolean = false;
  constructor(private nodeService: NodeService) { }
  ngOnInit(): void {
    this.nodeService.getNodes().then((data: any[]) => this.items = data);
  }

  hide() {
    this.isShow = !this.isShow;
    if (this.items.length === 0) {
      this.nodeService.getNodes().then((data: any[]) => this.items = data);
    }
  }

  refresh() {
    this.items = [];
    this.isShow = false
  }
}
