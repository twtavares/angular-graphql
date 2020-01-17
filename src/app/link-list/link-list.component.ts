import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Link} from '../types';

import {ALL_LINKS_QUERY, AllLinkQueryResponse} from '../graphql';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hn-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  allLinks: any;
  loading = true;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {

    this.apollo.watchQuery({
      query: ALL_LINKS_QUERY
    }).valueChanges.subscribe((response) => {
      // tslint:disable-next-line:no-string-literal
      this.allLinks = response.data['allLinks'];
      // tslint:disable-next-line:no-string-literal
      this.loading = response.data['loading'];
     });

  }

}
