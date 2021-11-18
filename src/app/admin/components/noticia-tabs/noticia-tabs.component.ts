import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-noticia-tabs',
  templateUrl: './noticia-tabs.component.html',
  styleUrls: ['./noticia-tabs.component.scss']
})
export class NoticiaTabsComponent implements OnInit {

  selectedTab = 1;

  constructor(private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>
    {
      console.log(params);
      this.selectedTab = params.tab;
    });
  }

}
