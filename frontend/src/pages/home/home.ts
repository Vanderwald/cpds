import {Component} from '@angular/core';
import {DataServiceProvider} from '../../providers/data-service/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public dataServiceProvider: DataServiceProvider) {
    this.getLiveData();
  }

  page = 0;
  PER_PAGE = 30;
  items = [];
  liveData;
  hasMoreData = true;

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.setData();
      infiniteScroll.complete();
    }, 500);
  }

  getLiveData() {
    this.dataServiceProvider.getLiveData().subscribe(liveData => {
      this.liveData = liveData;
      this.setData();
    });
  }

  setData() {
    this.items = [...this.items, ...this.liveData.slice((this.page * this.PER_PAGE), (this.page * this.PER_PAGE + this.PER_PAGE))];
    this.page++;
    if (this.items.length === this.liveData.length) {
      this.hasMoreData = false;
    }
  }
}
