import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OaeFilterComponent } from './_modules/hierarchy-node/oae-filter/oae-filter.component';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OaeFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TranslateService],
})
export class AppComponent implements OnInit {
  title = 'HeirarchyNode';
  constructor(private primengConfig: PrimeNGConfig) { 
    // this.translateService.setDefaultLang('en');
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
  }
  ngOnInit() {
    this.primengConfig.filterMatchModeOptions = {
      text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
      numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
      date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    };
    this.primengConfig.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
      //translations
    });
  }

  translate(lang: string) {
    // this.translateService.use(lang);
    // this.translateService.get('primeng').subscribe(res => this.primengConfig.setTranslation(res));
  }
}
