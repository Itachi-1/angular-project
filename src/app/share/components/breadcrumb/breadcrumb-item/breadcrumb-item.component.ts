import { Component, Input, OnInit, Optional, TemplateRef } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb.component';

@Component({
  selector: 'xm-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent implements OnInit {
  // 注入他的父级元素，以调用其属性或方法
  constructor(@Optional() readonly parent:BreadcrumbComponent) { }

  ngOnInit(): void {
  }

}
