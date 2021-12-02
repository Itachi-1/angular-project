import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Base, Category} from "./types";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  readonly prefix = '/xmly/';
  constructor(private http: HttpClient) {}
  categories(categoryId = 3): Observable<Category[]> {
    const params = new HttpParams().set('categoryId', categoryId.toString());
    return this.http
      .get(`${environment.baseUrl}${this.prefix}breadcrumb`, { params })
      .pipe(map((res: any) => res.data.categories));
  }
}
