import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'xm-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  // 为了不给每个Item项传xmSeparator,因此输入到他的父级元素,获取注入模板类型TemplateRef
  @Input() xmSeparator!: TemplateRef<any>

  constructor() { }

  ngOnInit(): void {
  }

}
