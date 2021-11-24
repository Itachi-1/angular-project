import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../services/api/types'

@Component({
  selector: 'xm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  user: User = {
    phone: '',
    name: '',
    password: ''
  };
  constructor() {
  }

  ngOnInit(): void {
  }

}
