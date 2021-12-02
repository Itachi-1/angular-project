import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AlbumService} from './services/api/album.service';
import {Category} from "./services/api/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'xmly';
  currentCategory!: Category;
  categories!: Category[];
  categoryPinyin: string = 'youshengshu';
  subcategory!: string[];

  constructor(private albumServe: AlbumService,private cdr:ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.init()
    }

  init() {
    this.albumServe.categories().subscribe((categories)=> {
      console.log(categories)
      this.categories = categories
      this.categories.find((item) => {
        if(item.pinyin = this.categoryPinyin){
          this.currentCategory = item
        }
      })
      this.cdr.markForCheck()
      console.log(this.currentCategory)
    })
  }
  changeCategory(category: Category) {
    this.currentCategory = category
  }
}
