import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  // lấy được title và selected từ app-tab
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.tabs);
    this.selectTab(this.tabs.first);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => t.selected = false);

    // tab is reference of this.tabs
    tab.selected = true;
  }

}
